import React from "react";
import "./Navbar.css";
// import logo from "../../assets/logo.png";
import logo from "../../assets/logo.png";
// import Search from "../search/Search";
import { RxAvatar } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";

function Navbar() {
  return (
    <React.Fragment>
      <div className="navbar">
        <div className="start_nav">
          <img src={logo} alt="99 acres" />
          <h5>Buy in Dwarka Delhi</h5>
          <IoIosArrowDown />
        </div>
        <div className="middle_nav">
          <ul className="flex">
            <li>For Buyers</li>
            <li>For Tanents</li>
            <li>For Owners</li>
            <li>For Dealers/Builders</li>
            <li>Insights</li>
          </ul>
        </div>
        <button className="button">
          <span>Post Properties</span>
        </button>
        <div className="icon">
          <RxAvatar />
          <div />
          <GiHamburgerMenu />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Navbar;
