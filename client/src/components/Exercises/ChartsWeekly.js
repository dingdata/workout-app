import React, { useState, useEffect } from "react";
import { Bar, Chart } from "react-chartjs-2";
import "chartjs-plugin-datalabels";
import ChartDataLabels from "chartjs-plugin-datalabels";
import axios from "axios";
import api from "./../../constants/api";

const ChartsWeekly = () => {
  console.log("In chart weekly");

  Chart.register(ChartDataLabels);
  let delayed;
  let weekArray = [];
  let exerciseCountArray = [];

  const [completedExerciseList, setCompletedExerciseList] = useState([]);

  const getCompletedExerciseList = async () => {
    try {
      const res = await axios.get(api.exercisesCountByWeek);
      const exerciseList = res.data;

      setCompletedExerciseList(exerciseList);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCompletedExerciseList();
  }, []);

  const formatDate = (date) => {
    return `${date.getDate()}/${date.getMonth() + 1}`;
  };

  if (completedExerciseList) {
    weekArray = completedExerciseList.map((week) =>
      formatDate(new Date(week.weekStart))
    );
    exerciseCountArray = completedExerciseList.map(
      (exerciseCount) => exerciseCount.count
    );

    console.log(weekArray);
    console.log(exerciseCountArray);
  }

  const data = {
    labels: weekArray,
    datasets: [
      {
        label: "My past 5 week progress",
        data: exerciseCountArray,
        backgroundColor: ["rgba(243, 207, 4, 1)"],
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
        color: "black",
        display: true,
        font: {
          weight: "bold",
        },
      },
    },
  };

  return (
    <div>
      <div className="header">
        <h1 className="home__slogan history_bg">My Weekly Progress</h1>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ChartsWeekly;
