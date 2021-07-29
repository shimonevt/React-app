import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setProfileThunkCreator } from "../../redux/reducer/profile-reducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.setUserProfile(this.props.profile.id);
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}
const mapStateToProps = (state) => {
  return {
      profile: state.profilePage.profile
  };
};
let WithURLDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile: setProfileThunkCreator})(WithURLDataContainerComponent);
