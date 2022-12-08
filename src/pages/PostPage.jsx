import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyLoader from "../components/ui/loader/MyLoader";
import { useFetching } from "../hooks/useFetching";
import PostService from "../services/PostService";

export default function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading, error] = useFetching(async (postId) => {
    const response = await PostService.getPostById(postId);
    setPost(response.data);
  });

  const [fetchCommenstById, isCommentsLoading, CommentsError] = useFetching(
    async (postId) => {
      const response = await PostService.getCommentsByPostId(postId);
      setComments(response.data);
    }
  );

  useEffect(() => {
    fetchPostById(id);
    fetchCommenstById(id);
  }, []);

  return (
    <div>
      <h3>Post page id:{id}</h3>
      {isLoading ? (
        <MyLoader />
      ) : (
        <div>
          {post.id} {post.title}
        </div>
      )}

      <h4>Comments</h4>
      {isLoading ? (
        <MyLoader />
      ) : (
        <div>
          {comments.map((comm) => (
            <div style={{ marginTop: 15 }}>
              <h5>{comm.email}</h5>
              <div>{comm.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
