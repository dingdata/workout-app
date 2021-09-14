import React from "react";
import YoutubeIframe from "./YoutubeIframe";
import { useHistory } from "react-router-dom";

const DisplayWorkoutItem = (props) => {
  const history = useHistory();

  const backClickHandler = () => {
    let path = `allWorkouts`;
    history.push(path);
  };

  const completedClickHandler = () => {
    let path = `howItWorks`;
    history.push(path);
  };

  return (
    <div className="workout-container">
      <YoutubeIframe tag={props.location.tag} />
      <div>
        <div className="button-container">
          <button
            className="button__primary button__link"
            onClick={backClickHandler}
          >
            Back
          </button>
          {/* <button
            className="button__secondary button__link"
            onClick={completedClickHandler}
          >
            Completed
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default DisplayWorkoutItem;
