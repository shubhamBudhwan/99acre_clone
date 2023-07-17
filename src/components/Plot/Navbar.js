import React from "react";
import classes from "./Navbar.module.css";
import logo from "../../assets/logo.png";

export default function Navbar() {
  return (
    <nav className={classes.navbar}>
      <div className={classes["navbar-logo"]}>
        <img src={logo} alt="99 ACRE" />
      </div>
      <div className={classes["navbar-search"]}>
        <form action="/" method="get">
          <input type="text" placeholder="Search..." name="search" />
          <button type="submit">Search</button>
        </form>
        <button className={classes.postproperty}>Post Property</button>
      </div>
    </nav>
  );
}
