import React from "react";
import MyPosts from "../MyPosts/MyPosts";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
const Profile = (props) => {
  return (
    <div className="App-profile">
      <ProfileInfo />
      <MyPosts
        posts={props.profilePage.posts}
        newPost={props.profilePage.newPostText}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
};

export default Profile;
