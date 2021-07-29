import React from "react";
import ProfileInfoStyles from "./ProfileInfo.module.css";
class ProfileInfo extends React.Component {
  render() {
    return (
      <div className={ProfileInfoStyles}>
        {this.props.profile.photos.large !== undefined ? (
          <img
            className={ProfileInfoStyles.ProfileAvatar}
            src={this.props.profile.photos.large}
            alt="avatar"
          />
        ) : (
          <img
            className={ProfileInfoStyles.ProfileAvatar}
            src="https://https://html5css.ru/w3css/img_avatar3.png"
            alt="avatar"
          />
        )}
        <div className={ProfileInfoStyles.ProfileName}>
          {this.props.profile.fullName}
        </div>
      </div>
    );
  }
}
export default ProfileInfo;
