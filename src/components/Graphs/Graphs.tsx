import React, { useEffect, useState } from "react";
import "./Graphs.css";
import type { Constructor } from "../../utils/types/Constructor";
import Chart from "../Chart/Chart";
import Table from "../Table/Table";
import { AiFillHeart } from "react-icons/ai";
import { getConstructorResults } from "../../services/NetworkService";
import type { Result } from "../../utils/types/Result";

type GraphsProps = {
  selectedConstructor: Constructor | null;
};

const Graphs = (props: GraphsProps): JSX.Element => {
  const [year, setYear] = useState(2010);
  const [isLoading, setIsLoading]= useState(false);
  const [results, setResults] = useState<Result[]>([]);
  const [frequencies, setFrequencies] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    if (props.selectedConstructor !== null) {
      setIsLoading(true);
      getConstructorResults({
        constructorId: props.selectedConstructor.constructorId,
        year: year,
      }).then((resultsData) => {
        // eslint-disable-next-line no-console
        console.group('Results');
        // eslint-disable-next-line no-console
        console.log(resultsData);
        // eslint-disable-next-line no-console
        console.groupEnd();
        frequencies.fill(0);
        for (const res of resultsData) {
          if (res.position !== null && res.position <= 10) {
            frequencies[res.position - 1] += 1;
          }
        }
        // eslint-disable-next-line no-console
        console.log('frequencies: ', frequencies);
        setFrequencies([...frequencies]);
        setResults(resultsData);
      }).catch((err) => {
        // eslint-disable-next-line no-console
        console.error('GET constructor results: ', err);
      }).finally(() => {
        setIsLoading(false);
      });
    }
  }, [year]);

  return (
    <div className="graphsContainer">
      {props.selectedConstructor === null && <h1>Selecciona un constructor</h1>}
      {props.selectedConstructor !== null &&
      <>
        <div className="graphsHeader">
          <div className="favContainer bordered">
            {props.selectedConstructor.name}
              <AiFillHeart />
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
          {isLoading && <h1>Loading...</h1>}
          {!isLoading &&
          <>
            <div className="chart">
              <Chart frequencies={frequencies} />
            </div>
            <div className="table">
              <Table results={results} />
            </div>
          </>}
        </div>    
      </>}
    </div>
  );
};

export default Graphs;
