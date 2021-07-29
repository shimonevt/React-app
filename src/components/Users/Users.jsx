import React from "react";
import User from "../User/User";
import * as usersStyles from "./Users.module.css";
class Users extends React.Component {
  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    let pagesArr = [];
    for (let i = 1; i <= pagesCount; i += 1) {
      pagesArr.push(i);
    }
    let usersList = this.props.users.map((user) => (
      <User
        user={user}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        isFollowing={this.props.isFollowing}
      />
    ));
    return (
      <div className={usersStyles.users}>
        <div className={usersStyles.users__pagination}>
          {pagesArr.map((number) => {
            return number === this.props.currentPage ? (
              <span
                onClick={() => {
                  this.props.onPageChanged(number);
                }}
                className={usersStyles.users__paginationUnitActive}
              >
                {number}
              </span>
            ) : (
              <span
                onClick={() => {
                  this.props.onPageChanged(number);
                }}
                className={usersStyles.users__paginationUnit}
              >
                {number}
              </span>
            );
          })}
        </div>
        <div className={usersStyles.usersList}>{usersList}</div>
      </div>
    );
  }
}

export default Users;
