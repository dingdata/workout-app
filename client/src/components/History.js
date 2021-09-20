import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./History.css";
import axios from "axios";
import api from "../constants/api";

const History = () => {
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
    <div className="home__slogan">
      My Completed Workouts
      <div className=" workout-container list-exercise">
        {completedExercises &&
          completedExercises.map((exercise) => (
            <div className="list-img">
              <img
                src={`https://i4.ytimg.com/vi/${exercise.Exercise.tag}/mqdefault.jpg`}
                alt="exercise preview thumbnail"
              ></img>
              <div className="list-header">{exercise.Exercise.title}</div>

              <div className="list-text">
                {formatDate(new Date(exercise.createdAt))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default History;
