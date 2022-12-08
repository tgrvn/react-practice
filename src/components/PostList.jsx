import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PostItem from "./PostItem";

export default function PostList({ posts, title, remove }) {
  /* условная отрисовка */

  if (!posts.length) {
    return <h2 style={{ textAlign: "center" }}>Post list are empty</h2>;
  }

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      <TransitionGroup>
        {posts &&
          posts.map((post, i) => (
            <CSSTransition key={post.id} timeout={500} classNames="post">
              <PostItem remove={remove} number={i + 1} post={post} />
            </CSSTransition>
          ))}
      </TransitionGroup>
    </div>
  );
}
