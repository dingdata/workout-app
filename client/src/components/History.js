import React, { useState, useEffect, useCallback } from "react";
import { ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CompletedWorkouts.scss";
import axios from "axios";
import api from "../constants/api";

const History = () => {
  const [completedList, setCompletedList] = useState([]);

  const getCompletedList = async () => {
    try {
      const res = await axios.get(api.usersExercise);
      setCompletedList(res.data);
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
      <h4>Your Completed Workouts</h4>
      <div className="workout-container listexercise">
        {completedList &&
          completedList.map((exercise) => (
            <div>
              <ListGroup>
                <ListGroup.Item>
                  <p>
                    <img
                      src={`https://i4.ytimg.com/vi/${exercise.Exercise.tag}/mqdefault.jpg`}
                    ></img>
                  </p>
                  {exercise.Exercise.title}

                  <p>{formatDate(new Date(exercise.Exercise.createdAt))}</p>
                </ListGroup.Item>
              </ListGroup>
            </div>
          ))}
      </div>
    </div>
  );
};
export default History;
