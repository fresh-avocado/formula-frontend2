import React, { useState } from "react";
import Graphs from "../Graphs/Graphs";
import Sidebar from "../Sidebar/Sidebar";
import "./Visualizer.css";
import type { Constructor } from "../../utils/types/Constructor";

const Visualizer = (): JSX.Element => {
  const [constructor, setConstructor] = useState<Constructor | null>(null);

  return (
    <div className="visualizerContainer">
      <Sidebar onConstructorSelect={setConstructor} />
      <Graphs selectedConstructor={constructor} />
    </div>
  );
};

export default Visualizer;
