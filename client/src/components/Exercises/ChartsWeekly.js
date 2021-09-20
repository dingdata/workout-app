import React from "react";
import { Bar, Chart } from "react-chartjs-2";
import "chartjs-plugin-datalabels";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ChartDataLabels);

let delayed;
const data = {
  labels: ["Week1", "Week2", "Week3", "Week4", "Current week"],
  //labels: ["6/9", "13/9", "20/9", "27/9", "4/10"],
  datasets: [
    {
      label: "# of Votes",
      data: [3, 2, 3, 4, 2],
      backgroundColor: ["Blue"],
      borderColor: ["Blue"],
      borderWidth: 1,
      datalabels: {
        align: "center",
        anchor: "center",
      },
    },
  ],
};

const options = {
  responsive: true,
  animation: {
    onComplete: () => {
      delayed = true;
    },
    delay: (context) => {
      let delay = 0;
      if (context.type === "data" && context.mode === "default" && !delayed) {
        delay = context.dataIndex * 300 + context.datasetIndex * 100;
      }
      return delay;
    },
  },
  scales: {
    x: {
      Min: 0,
      Max: 5,
      grid: {
        display: false,
      },
    },

    y: {
      stacked: true,
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    datalabels: {
      color: "red",
      display: true,
      font: {
        weight: "bolder",
      },
    },
  },
};

const VerticalBar = () => (
  <>
    <div className="header">
      <h1 className="title">Vertical Bar Chart</h1>
      <div className="links">
        <a
          className="btn btn-gh"
          href="https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/VerticalBar.js"
        >
          Github Source
        </a>
      </div>
    </div>
    <Bar data={data} options={options} />
  </>
);

export default VerticalBar;
