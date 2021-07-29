import React from "react";
import { NavLink } from "react-router-dom";
import "./User.css";

class User extends React.Component {
  render() {
    return (
      <div className="user">
        <NavLink to={`/profile/${this.props.user.id}`}>
          <div className="user__avatar">
            {this.props.user.imageUrl ? (
              <img
                className="user__avatar-img"
                src={`${this.props.user.imageUrl}`}
                alt="avatar"
              />
            ) : (
              <img
                className="user__avatar-img"
                src="https://html5css.ru/w3css/img_avatar3.png"
                alt="avatar"
              />
            )}
          </div>
        </NavLink>
        <div className="user__info">
          <div className="user__name">{this.props.user.name}</div>
          {this.props.user.location ? (
            <div className="user__location">
              {this.props.user.location.city},{" "}
              {this.props.user.location.country}
            </div>
          ) : (
            <div className="user__location"></div>
          )}
        </div>
        <div className="user__status">{this.props.user.status}</div>
        {this.props.user.followed ? (
          <button
            disabled={this.props.isFollowing.some(
              (id) => id === this.props.user.id
            )}
            className="user__btn"
            onClick={() => {
              this.props.unfollow(this.props.user.id);
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            disabled={this.props.isFollowing.some(
              (id) => id === this.props.user.id
            )}
            className="user__btn"
            onClick={() => {
              this.props.follow(this.props.user.id);
            }}
          >
            Follow
          </button>
        )}
      </div>
    );
  }
}
export default User;
