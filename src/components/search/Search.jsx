import React, { useState } from "react";
import "./Search.css";
import { IoIosArrowDown } from "react-icons/io";

export default function Search(props) {
  const [input, setInput] = useState("");
  const searchHandler = () => {
    if (input !== "") {
      props.homeToPlotHandler();
    }
  };

  return (
    <React.Fragment>
      <div className="searchcontainer">
        <div className="types">
          <div className="typeoption">Buy</div>
          <div className="typeoption">Rent</div>
          <div className="typeoption">Commercial</div>
          <div className="typeoption">Coworking</div>
          <div className="typeoption">Projects</div>
        </div>
        <div className="searchcontainerline">
          <span className="box1">
            All Residential
            <IoIosArrowDown />
          </span>
          <span className="search">
            <input
              type="text"
              placeholder="Search.."
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
          </span>
          {/* <span> */}
          <button className="searchButton" onClick={searchHandler}>
            Search
          </button>
          {/* </span> */}
        </div>
      </div>
    </React.Fragment>
  );
}
