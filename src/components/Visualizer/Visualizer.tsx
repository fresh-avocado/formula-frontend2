import React from "react";
import Graphs from "../Graphs/Graphs";
import Sidebar from "../Sidebar/Sidebar";
import "./Visualizer.css";

const Visualizer = (): JSX.Element => {
  return (
    <div className="visualizerContainer">
      <Sidebar />
      <Graphs />
    </div>
  );
};

export default Visualizer;
