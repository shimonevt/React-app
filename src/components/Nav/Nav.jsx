import React from "react";
import navClasses from "./Nav.module.css";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <nav className={navClasses.nav}>
      <div className={navClasses.nav__item}>
        <NavLink to="/profile" activeClassName={navClasses.activeLink}>Profile</NavLink>
      </div>
      <div className={navClasses.nav__item}>
        <NavLink to="/news" activeClassName={navClasses.activeLink}>News</NavLink>
      </div>
      <div className={navClasses.nav__item}>
        <NavLink to="/dialogs" activeClassName={navClasses.activeLink}>Dialogs</NavLink>
      </div>
      <div className={navClasses.nav__item}>
        <NavLink to="/settings" activeClassName={navClasses.activeLink}>Settings</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
