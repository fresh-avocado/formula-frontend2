import React, { useState } from "react";
import "./Graphs.css";
import type { Constructor } from "../../utils/types/Constructor";
import Chart from "../Chart/Chart";
import Table from "../Table/Table";
import { AiFillHeart } from "react-icons/ai";

type GraphsProps = {
  selectedConstructor: Constructor | null;
};

const Graphs = (props: GraphsProps): JSX.Element => {
  const [year, setYear] = useState(2010);

  return (
    <div className="graphsContainer">
      {props.selectedConstructor === null && <h1>Selecciona un constructor</h1>}
      {props.selectedConstructor !== null &&
      <>
        <div className="graphsHeader">
          <div className="favContainer bordered">
            {props.selectedConstructor.name}
              <AiFillHeart
              />
          </div>
          <select id="years" value={year} onChange={(e) => {
            setYear(+e.target.value);
          }}>
            <option value="2010">2010</option>
            <option value="2011">2011</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
          </select>
        </div>
        <div className="graphs">
          <div className="chart">
            <Chart frequencies={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
          </div>
          <div className="table">
            <Table />
          </div>
        </div>    
      </>}
    </div>
  );
};

export default Graphs;
