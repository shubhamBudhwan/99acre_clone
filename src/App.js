import React, { useState } from "react";
import Body from "./components/body/Body";
import "./App.css";
import Navbar from "./components/nav/Navbar";
import Plot from "./components/Plot/Plot";

function App() {
  const [home, setHome] = useState(true);
  const [plot, setPlot] = useState(false);

  const homeToPlotHandler = () => {
    setHome(false);
    setPlot(true);
  };

  return (
    <>
      {home && <Navbar />}
      {home && <Body homeToPlotHandler={homeToPlotHandler} />}
      {plot && <Plot />}
    </>
  );
}

export default App;
