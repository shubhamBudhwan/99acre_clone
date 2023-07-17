import React from "react";
import bg from "./img/bg.png";
import "./Body.css";
import Search from "../search/Search";
// import Navbar from "../nav/Navbar";

function Body(props) {
  return (
    <>
      <div className="header">
        <div className="background">
          <img src={bg} alt="bgimg" className="image" />
        </div>

        {/* <div class="n">
          <div class="inner_div"></div>
          <div class="inner_2nd_div"></div>
        </div> */}
        <div className="search">
          <Search homeToPlotHandler={props.homeToPlotHandler}/>
        </div>
      </div>
    </>
  );
}

export default Body;
