import React from "react";
import "./Table.css";

type ChartProps = {
  frequencies: number[];
};

const Table = (props: ChartProps): JSX.Element => {
  return (
    <div className="tableContainer">
      <h1>Table</h1>
      <h1>Table</h1>
      <h1>Table</h1>
      <h1>Table</h1>
      {/* NOTE: Cada constructor tiene dos autos en la competencia en cada carrera */}
      {/* NOTE: 1 <= racePosition <= 10 */}
      {/* raceName, driverName, diverNumber, racePosition, raceDate */}
    </div>
  );
};

export default Table;
