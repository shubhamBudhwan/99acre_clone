import React, { useState, useEffect } from "react";

import Header from "./Header";
import classes from "./Plot.module.css";
import Navbar from "./Navbar";
import items from "../../Data.json";

const Plot = () => {
  const [plots, setPlots] = useState(items);
  const [sortOrder, setSortOrder] = useState("none");
  const lowToHigh = () => {
    setSortOrder("lowToHigh");
  };

  const highToLow = () => {
    setSortOrder("highToLow");
  };

  useEffect(() => {
    if (sortOrder === "lowToHigh") {
      const sortedPlots = [...items].sort((a, b) => a.price - b.price);
      setPlots(sortedPlots);
    } else if (sortOrder === "highToLow") {
      const sortedPlots = [...items].sort((a, b) => b.price - a.price);
      setPlots(sortedPlots);
    }
  }, [sortOrder]);

  return (
    <>
      <Navbar />
      <div className={classes.sort}>
        <p>Sort By: </p>
        <button onClick={lowToHigh}>Low to High</button>
        <button onClick={highToLow}>High to Low</button>
      </div>
      {plots.map((plot) => (
        <Header
          logo={plot.logo}
          name={plot.name}
          flat={plot.flat}
          nearby={plot.nearby}
          price={plot.price}
          key={plot.id}
        />
      ))}
    </>
  );
};

export default Plot;
