import React from "react";
import { addPostActionCreator, updatePostActionCreator } from '../../redux/reducer/profile-reducer';
import MyPosts from "./MyPosts";
const MyPostsContainer = (props) => {
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };
  let onPostChange = (newPostText) => {
    let action = updatePostActionCreator(newPostText);
    props.dispatch(action);
  };
  return (<MyPosts newPostText={props.newPostText} posts={props.posts} updateNewPostText={onPostChange} addPost={addPost}/>);
};
export default MyPostsContainer;
