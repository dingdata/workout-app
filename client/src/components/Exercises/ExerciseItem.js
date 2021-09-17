import React from "react";
import { Link } from "react-router-dom";
import "./ExerciseItem.scss";

const ExerciseItem = ({ exercise }) => {
  const exerciseLink = {
    pathname: "/workoutItem",
    tag: exercise.tag,
    exerciseId: exercise.id,
  };
  return (
    <div className="workouts__item">
      <div className="workout__image">
        <Link to={exerciseLink}>
          <img
            src={`https://i4.ytimg.com/vi/${exercise.tag}/mqdefault.jpg`}
          ></img>
        </Link>
      </div>
      <div className="workout__title">
        <div className="workout__titlepadding">
          <p>{exercise.title}</p>
        </div>
        <div className="break"></div>
        <div className="workout__details">
          <div className="label title">
            <div>{exercise.exerciseType}</div>
          </div>
          <div className="label duration">{exercise.duration} mins</div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseItem;
