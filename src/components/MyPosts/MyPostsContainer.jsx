import React from "react";
import { connect } from "react-redux";
import {
  addPostActionCreator,
  updatePostActionCreator,
} from "../../redux/reducer/profile-reducer";
import MyPosts from "./MyPosts";
class MyPostsContainer extends React.Component {
  render() {
      return (
        <MyPosts
          posts={this.props.posts}
          newPostText={this.props.newPostText}
          addPost={this.props.addPost}
          updateNewPostText={this.props.updateNewPostText}
        />
      );
    }
}
const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

export default connect(mapStateToProps, {
  addPost: addPostActionCreator,
  updateNewPostText: updatePostActionCreator,
})(MyPostsContainer);
