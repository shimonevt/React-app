import React from "react";
import Post from "../Post/Post";
const MyPosts = (props) => {
  let posts = props.posts.map((post) => (
    <Post
      image={post.image}
      message={post.message}
      numberOfLikes={post.numberOfLikes}
    />
  ));
  
  let newPostElement = React.createRef();
  let addPost = () => {
    props.addPost();
  };
  let updatePost = (event) => {
    let newPostText = newPostElement.current.value;
    props.updateNewPostText(newPostText);
  };
  return (
    <div className="posts">
      <p>Posts</p>
      <textarea
        onChange={updatePost}
        ref={newPostElement}
        value={props.newPostText}
      ></textarea>
      <button onClick={addPost}>Add</button>
      <div className="posts__container">{posts}</div>
    </div>
  );
};
export default MyPosts;
