import React from "react";
import "./Graphs.css";
import type { Constructor } from "../../utils/types/Constructor";

type GraphsProps = {
  selectedConstructor: Constructor | null;
};

const Graphs = (props: GraphsProps): JSX.Element => {
  return (
    <div className="graphsContainer">
      <h1>
        {props.selectedConstructor != null
          ? `Graphs for ${props.selectedConstructor.name}`
          : "Please select a constructor"}
      </h1>
    </div>
  );
};

export default Graphs;
