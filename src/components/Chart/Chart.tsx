import React from "react";
import "./Chart.css";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  type ChartData,
  type ChartOptions,
  Title
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title
);

type ChartProps = {
  frequencies: number[];
  constructorName: string;
  year: number;
};

const Chart = (props: ChartProps): JSX.Element => {
  const data: ChartData<"bar", number[], string> = {
    labels: ['1ro', '2do', '3ro', '4to', '5to', '6to', '7mo', '8vo', '9no', '10mo'],
    datasets: [
      {
        label: 'Frecuencia',
        data: props.frequencies.slice(0, 10),
        backgroundColor: 'black',
        barThickness: 25,
      }
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    backgroundColor: 'white',
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Frecuencia',
          color: '--primary-color',
          font: {
            size: 18,
          },
        },
      },
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Puesto',
          color: '--primary-color',
          font: {
            size: 18,
          },
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: `${props.constructorName} en el ${props.year}`,
        font: {
          size: 20,
        },
      },
    },
  };

  return (
    <div className="chartContainer">
      <Bar data={data} options={options} style={{padding: '5px', width: '90%'}} />
    </div>
  );
};

export default Chart;
