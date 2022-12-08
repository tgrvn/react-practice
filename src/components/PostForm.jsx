import React, { useState } from "react";
import MyButton from "./ui/button/MyButton";
import MyInput from "./ui/input/MyInput";

export default function PostForm({ create }) {
  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  function addNewPost(e) {
    e.preventDefault();

    const newPost = { ...post, id: Date.now() };
    create(newPost);

    setPost({ ...post, title: "", body: "" });
  }

  return (
    <form>
      {/* управляемый компонент */}
      <MyInput
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        value={post.title}
        type={"text"}
        placeholder={"Post name..."}
      />
      <MyInput
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        value={post.body}
        type={"text"}
        placeholder={"Post body..."}
      />

      <MyButton onClick={addNewPost}>Create post</MyButton>

      {/* неуправляемый/неконтролирумый компонент
    // const bodyInputRef = useRef();
    <MyInput
    ref={bodyInputRef}
    type={"text"}
    placeholder={"Post description..."}
    /> */}
    </form>
  );
}
