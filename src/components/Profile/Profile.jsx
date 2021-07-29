import React from "react";
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
class Profile extends React.Component {
  render() {
    return (
      <div className="App-profile">
        <ProfileInfo profile={this.props.profile}/>
        <MyPostsContainer /> 
      </div>
    );
  }
}
export default Profile;
