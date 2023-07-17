import React from "react";
import "./Navbar.css";
// import logo from "../../assets/logo.png";
import logo from "../../assets/logo.png";
// import Search from "../search/Search";

function Navbar() {
  return (
    <React.Fragment>
      <div className="navbar flex">
        <div className="start_nav flex">
          <img src={logo} alt="99 acres" />
          <h5>Buy in Dwarka Delhi</h5>
        </div>
        <div className="middle_nav">
          <ul className="flex">
            <li>For Buyers</li>
            <li>For Buyers</li>
            <li>For Buyers</li>
            <li>For Buyers</li>
            <li>For Buyers</li>
          </ul>
        </div>
        <div className="navbar__whitediv">Post Property</div>
      </div>
    </React.Fragment>
  );
}

export default Navbar;
