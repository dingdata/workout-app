import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MyProgress.css";
import axios from "axios";
import api from "../constants/api";
import ChartsWeekly from "./Exercises/ChartsWeekly";

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
      <div className="chart-container">
        <ChartsWeekly />
      </div>
      <div className="workout-container list-exercise progress-bg">
        <div className="progress-header">Completed Workouts</div>
        {completedExercises &&
          completedExercises.map((exercise) => (
            <div>
              <div className="progress-container">
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
