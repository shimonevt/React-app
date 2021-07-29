import React from "react";
import { NavLink } from "react-router-dom";
import HeaderStyles from "./Header.module.css";
const Header = (props) => {
  return (
    <header className={HeaderStyles.AppHeader}>
      <img
        className={HeaderStyles.AppHeaderImg}
        src="https://upload.wikimedia.org/wikipedia/en/f/fd/Pusheen_the_Cat.png"
        alt="logo"
      />
      <div className={HeaderStyles.LoginBlock}>
        {props.isAuth ? (
          props.login
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
