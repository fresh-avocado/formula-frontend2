import React from "react";
import "./Table.css";
import type { Result } from "../../utils/types/Result";

type ChartProps = {
  results: Result[];
};

const Table = (props: ChartProps): JSX.Element => {
  return (
    <div className="tableContainer">
      <div className="tableHeader">
        <h2 className="sticky">#</h2>
        <h2 className="sticky">Driver</h2>
        <h2 className="sticky">Race</h2>
        <h2 className="sticky">Position</h2>
      </div>
      <div className="tableData">
        {props.results.map((data, i) => {
          return (
            <div className="tableRow" key={i}>
              <p>{i + 1}</p>
              <p>{data.driverName}</p>
              <p>{data.raceName}</p>
              <p>{data.position ?? '-'}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Table;
