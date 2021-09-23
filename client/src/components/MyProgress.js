import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MyProgress.scss";
import axios from "axios";
import { api } from "../constants/api";
import ChartsWeekly from "./Exercises/ChartsWeekly";
import TableWeekly from "./Exercises/TableWeekly";

const MyProgress = () => {
  const [completedExercises, setCompletedExercises] = useState([]);

  const getCompletedList = async () => {
    try {
      const res = await axios.get(api.usersExercise);
      console.log(res);
      setCompletedExercises(res.data);
    } catch (err) {
      // setErrorMessage(err.res.data);
      // TODO: you can make use of this error message to display on the UI
    }
  };

  useEffect(() => {
    getCompletedList();
  }, []);

  const formatDate = (date) => {
    return `${date.toDateString()}, ${date.toLocaleTimeString()}`;
  };
  return (
    <div>
      <div className="progress-header progress-bg">My Weekly Progress</div>
      <div className="progress-table-container">
        <TableWeekly />
      </div>
      <div className="chart-container">
        <ChartsWeekly />
      </div>
      <div className="list-exercise">
        <div className="progress-header progress-bg">Completed Workouts</div>
        {completedExercises &&
          completedExercises.map((exercise) => (
            <div>
              <div className="completed-exercise">
                <img
                  className="list-img"
                  src={`https://i4.ytimg.com/vi/${exercise.Exercise.tag}/mqdefault.jpg`}
                  alt="exercise preview thumbnail"
                />
                <div className="list-details">
                  <div className="list-title">{exercise.Exercise.title}</div>
                  <div className="list-date">
                    {formatDate(new Date(exercise.createdAt))}
                  </div>
                </div>
              </div>
              <div className="break"></div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default MyProgress;
