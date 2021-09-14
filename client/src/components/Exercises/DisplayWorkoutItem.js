import React from "react";
import YoutubeIframe from "./YoutubeIframe";

const DisplayWorkoutItem = (props) => {
  return (
    <div className="workout-container">
      <YoutubeIframe tag={props.location.tag} />
    </div>
  );
};

export default DisplayWorkoutItem;
