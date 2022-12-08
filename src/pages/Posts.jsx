import React, { useEffect, useRef, useState } from "react";
import { useFetching } from "../hooks/useFetching";
import { usePosts } from "../hooks/usePost";
import { getPageCount } from "../utils/pages";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import MyButton from "../components/ui/button/MyButton";
import MyLoader from "../components/ui/loader/MyLoader";
import MyModal from "../components/ui/modal/MyModal";
import PostService from "../services/PostService";
import MyPagination from "../components/ui/pagination/MyPagination";
import { useObserver } from "../hooks/useObserver";
import MySelect from "../components/ui/select/MySelect";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);

  const lastElement = useRef();

  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts([...posts, ...response.data]);

      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPageCount(totalCount, limit));
    }
  );

  useObserver(lastElement, page < totalPages, isPostsLoading, () =>
    setPage(page + 1)
  );

  const sortedAndSerchedPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  function createPost(post) {
    setPosts([...posts, post]);
    setModal(false);
  }

  function deletePost(post) {
    setPosts(posts.filter((p) => p.id !== post.id));
  }

  function changePage(page) {
    setPage(page);
    fetchPosts(limit, page);
  }

  return (
    <div className="App">
      <MyButton style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
        Create post
      </MyButton>

      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: "15px 0" }}></hr>

      <PostFilter filter={filter} setFilter={setFilter} />

      <MySelect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue={"Posts quantity"}
        options={[
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: 25, name: "25" },
          { value: -1, name: "Show all" },
        ]}
      />

      {postError && <h3>Error: {postError}</h3>}

      <PostList
        remove={deletePost}
        posts={sortedAndSerchedPosts}
        title={"Posts list"}
      />

      <div ref={lastElement} style={{ height: 20, background: "red" }}></div>

      {isPostsLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 50,
          }}
        >
          <MyLoader />
        </div>
      )}

      <MyPagination
        page={page}
        changePage={changePage}
        totalPages={totalPages}
      />
    </div>
  );
}

export default Posts;
