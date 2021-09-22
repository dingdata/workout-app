import { React, useState } from "react";
import YoutubeIframe from "./YoutubeIframe";
import { useHistory } from "react-router-dom";
import api from "../../constants/api";
import axios from "axios";
import "./DisplayWorkoutItem.css";
import { Link } from "react-router-dom";

const DisplayWorkoutItem = (props) => {
  const history = useHistory();
  const [completed, setCompleted] = useState(false);
  const backClickHandler = () => {
    let path = `allWorkouts`;
    history.push(path);
  };

  const goWorkoutHistory = {
    pathname: "/myProgress",
  };
  const completedClickHandler = async () => {
    let exerciseId = props.location.state.exerciseId;
    const res = await axios.post(api.usersExercise + `/${exerciseId}`, {});
    setCompleted((completed) => !completed);
  };

  return (
    <div className="workout_bg workout-container">
      <YoutubeIframe tag={props.location.state.tag} />

      <div>
        <div className="button-container">
          <button
            className="button__primary button__link"
            onClick={backClickHandler}
          >
            Back
          </button>

          {!completed && (
            <button
              className="button__secondary button__link"
              onClick={completedClickHandler}
            >
              Completed
            </button>
          )}

          {completed && (
            <div>
              <button className="button__secondary button__link disabled">
                Completed
              </button>
            </div>
          )}
        </div>
        {completed && (
          <div className="home__slogan">
            Sore? Tired? Out of breath? Good… it’s working !
          </div>
        )}
      </div>
    </div>
  );
};

export default DisplayWorkoutItem;
