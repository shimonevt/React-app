import React from "react";
import PostClasses from "./Post.module.css";
class Post extends React.Component {
  render() {
    return (
      <div className={PostClasses.post}>
        <img src={this.props.image} />
        <div className={PostClasses.post__text}>{this.props.message}</div>
        <span>{this.props.numberOfLikes}</span>
      </div>
    );
  }
}
export default Post;
