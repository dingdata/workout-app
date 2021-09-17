import React, { useState, useEffect, useCallback } from "react";
import { ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CompletedWorkouts.scss";
import axios from "axios";
import api from "../constants/api";

const History = () => {
  const [CompletedList, setCompletedList] = useState([]);

  const getCompletedList = async () => {
    try {
      const res = await axios.get(api.usersExercise);
      console.log(res);
      setCompletedList(res.data);
    } catch (err) {
      // setErrorMessage(err.res.data);
      // TODO: you can make use of this error message to display on the UI
    }
  };

  useEffect(() => {
    getCompletedList();
  }, []);

  const isLoaded = () => {
    console.log("Is Loaded" + CompletedList.length);
    if (CompletedList.length === 0) return false;
    else return true;
  };

  return (
    <div>
      <h4>Your Completed Workouts !!!</h4>
      <div className="workout-container listexercise">
        {!isLoaded && console.log("nothing") && <div>Loading...</div>}
        {isLoaded &&
          console.log("list coming ..") &&
          CompletedList.map((exercisedone) => (
            <div>{exercisedone.Exercise.title}In liao</div>
          ))}
      </div>
    </div>
  );
};
export default History;
