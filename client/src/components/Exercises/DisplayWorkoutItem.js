import React from "react";
import YoutubeIframe from "./YoutubeIframe";

const DisplayWorkoutItem = (props) => {
  return (
    <div>
      <YoutubeIframe tag={props.location.tag} />
    </div>
  );
};

export default DisplayWorkoutItem;
