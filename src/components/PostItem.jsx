import React from "react";
import MyButton from "./ui/button/MyButton";
import { useNavigate } from "react-router-dom";

export default function PostItem({ post, number, remove }) {
  const navigate = useNavigate();

  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {post.id}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => remove(post)}>Delete</MyButton>
        <MyButton onClick={() => navigate(`/posts/${post.id}`)}>Open</MyButton>
      </div>
    </div>
  );
}
