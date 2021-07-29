import React from "react";
import { connect } from "react-redux";
import {
  followActionCreator,
  unfollowActionCreator,
  togglePageActionCreator,
  followThunkCreator,
  getUsersThunkCreator,
} from "../../redux/reducer/users-reducer";
import Users from "./Users";
import axios from "axios";
import Preloader from "../Preloader/Preloader";
class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage,this.props.pageSize);
  }
  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber,this.props.pageSize);
    this.props.togglePage(pageNumber);
  };
  render() {
    return (
      <>
        {this.props.isLoading ? <Preloader /> : null}
        <Users
          users={this.props.users}
          pageSize={this.props.pageSize}
          totalUsersCount={this.props.totalUsersCount}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          toggleIsFollowing={this.props.toggleIsFollowing}
          isFollowing={this.props.isFollowing}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFollowing: state.usersPage.isFollowing
  };
};



export default connect(mapStateToProps, {
  follow: followThunkCreator,
  unfollow: unfollowActionCreator,
  togglePage: togglePageActionCreator,
  getUsers: getUsersThunkCreator
})(UsersContainer);
