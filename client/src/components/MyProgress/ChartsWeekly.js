import React, { useState, useEffect } from "react";
import { Bar, Chart } from "react-chartjs-2";
import "chartjs-plugin-datalabels";
import ChartDataLabels from "chartjs-plugin-datalabels";
import axios from "axios";
import { api, apiConfig } from "../../constants/api";

const ChartsWeekly = () => {
  Chart.register(ChartDataLabels);
  let delayed;
  let weekArray = [];
  let exerciseCountArray = [];

  const [completedExerciseList, setCompletedExerciseList] = useState([]);

  const getCompletedExerciseList = async () => {
    try {
      const res = await axios.get(
        api.exercisesCountByWeek + apiConfig.exerciseChartCount
      );
      const exerciseList = res.data;

      setCompletedExerciseList(exerciseList);
    } catch (err) {}
  };
  useEffect(() => {
    getCompletedExerciseList();
  }, []);

  if (completedExerciseList) {
    weekArray = completedExerciseList.map((week) => week.weekStart);
    exerciseCountArray = completedExerciseList.map(
      (exerciseCount) => exerciseCount.count
    );
  }

  const data = {
    labels: weekArray,

    datasets: [
      {
        label: "Number of workouts",
        data: exerciseCountArray,
        backgroundColor: ["rgba(243, 207, 4, 1)"],
        datalabels: {
          align: "end",
          anchor: "end",
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
        grid: {
          display: false,
        },
      },

      y: {
        grid: {
          display: false,
        },
        ticks: {
          stepSize: 10,
        },
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        color: "black",
        display: true,
        font: {
          weight: "bold",
        },
        offset: 1,
        padding: 0,
        formatter: function (value) {
          return value === 0 ? "No workout" : value;
        },
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ChartsWeekly;
