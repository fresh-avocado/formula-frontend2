import React from "react";
import "./Table.css";

type ChartProps = {
  frequencies: number[];
};

type FakeData = {
  raceName: string;
  driverName: string;
  driverNumber: number;
  racePosition: number;
  raceDate: string;
};

const fakeData: FakeData[] = [
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
  {
    raceName: 'Aussie Grand Prix',
    driverName: 'James Hunt',
    driverNumber: 5,
    racePosition: 1,
    raceDate: '1999'
  },
];

/* NOTE: 1 <= racePosition <= 10 */
/* NOTE: Cada constructor tiene dos autos en la competencia en cada carrera */

const Table = (props: ChartProps): JSX.Element => {
  return (
    <div className="tableContainer">
      <div className="tableHeader">
        <h2 className="sticky">#</h2>
        <h2 className="sticky">Race</h2>
        <h2 className="sticky">Driver</h2>
        <h2 className="sticky">Driver No</h2>
        <h2 className="sticky">Position</h2>
        <h2 className="sticky">Date</h2>
      </div>
      <div className="tableData">
        {fakeData.map((data, i) => {
          return (
            <div className="tableRow" key={i}>
              <p>{i}</p>
              <p>{data.raceName}</p>
              <p>{data.driverName}</p>
              <p>{data.driverNumber}</p>
              <p>{data.racePosition}</p>
              <p>{data.raceDate}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Table;
