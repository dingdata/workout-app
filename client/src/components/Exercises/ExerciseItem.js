import React from "react";

const ExerciseItem = ({ exercise }) => {
  return (
    <div>
      {exercise.exerciseTitle}
      <img src={`http://img.youtube.com/vi/${exercise.tag}/0.jpg`}></img>
      <img src={`http://img.youtube.com/vi/${exercise.tag}/1.jpg`}></img>
      <img src={`http://img.youtube.com/vi/${exercise.tag}/2.jpg`}></img>
      <img src={`http://img.youtube.com/vi/${exercise.tag}/3.jpg`}></img>
    </div>
  );
};

export default ExerciseItem;
