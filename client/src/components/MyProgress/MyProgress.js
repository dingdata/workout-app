import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MyProgress.scss";
import axios from "axios";
import { api } from "../../constants/api";
import ChartsWeekly from "./ChartsWeekly";
import TableWeekly from "./TableWeekly";
import { Link } from "react-router-dom";

const MyProgress = () => {
  const [completedExercises, setCompletedExercises] = useState([]);

  const getCompletedList = async () => {
    try {
      const res = await axios.get(api.usersExercise);
      setCompletedExercises(res.data);
    } catch (err) {
      // setErrorMessage(err.res.data);
      // TODO: you can make use of this error message to display on the UI
    }
  };

  useEffect(() => {
    getCompletedList();
  }, []);

  const exerciseLink = (exercise) => {
    return {
      pathname: "/workout-item",
      state: { tag: exercise.tag, exerciseId: exercise.id },
    };
  };

  const formatDate = (date) => {
    return `${date.toDateString()}, ${date.toLocaleTimeString()}`;
  };
  return (
    <div className="progress-container">
      <div className="progress-header">My Weekly Progress</div>
      <div className="progress-table-container">
        <TableWeekly />
      </div>
      <div className="chart-container">
        <ChartsWeekly />
      </div>
      <div className="list-exercise progress-bg">
        <div className="progress-header">Completed Workouts</div>
        {completedExercises &&
          completedExercises.map((exercise) => (
            <div>
              <div className="completed-exercise">
                <Link to={() => exerciseLink(exercise.Exercise)}>
                  {" "}
                  <img
                    className="list-img"
                    src={`https://i4.ytimg.com/vi/${exercise.Exercise.tag}/mqdefault.jpg`}
                    alt="exercise preview thumbnail"
                  />
                </Link>

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
