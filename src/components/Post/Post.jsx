import React from "react";
import PostClasses from "./Post.module.css";
const Post = (props) => {
  return (
    <div className={PostClasses.post}>
      <img src={props.image} />
      <div className={PostClasses.post__text}>{props.message}</div>
      <span>{props.numberOfLikes}</span>
    </div>
  );
};
export default Post;
