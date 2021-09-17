import { React, useState } from "react";
import YoutubeIframe from "./YoutubeIframe";
import { useHistory } from "react-router-dom";
import api from "../../constants/api";
import axios from "axios";
import "./DisplayWorkoutItem.css";

const DisplayWorkoutItem = (props) => {
  const history = useHistory();
  const [completed, setCompleted] = useState(false);
  const backClickHandler = () => {
    let path = `allWorkouts`;
    history.push(path);
  };

  const completedClickHandler = async () => {
    let path = `howItWorks`;
    let exerciseId = props.location.exerciseId;
    const res = await axios.post(api.usersExercise + `/${exerciseId}`, {});
    setCompleted((completed) => !completed);
    // history.push(path);
  };

  return (
    <div className="workout_bg workout-container ">
      <YoutubeIframe tag={props.location.tag} />

      <div>
        <div className="button-container">
          <button
            className="button__primary button__link"
            onClick={backClickHandler}
          >
            Back
          </button>
          <button
            className="button__secondary button__link"
            onClick={completedClickHandler}
          >
            Completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplayWorkoutItem;
