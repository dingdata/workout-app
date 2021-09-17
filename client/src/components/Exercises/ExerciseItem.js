import React from "react";
import { Link } from "react-router-dom";
import "./ExerciseItem.scss";

const ExerciseItem = ({ exercise }) => {
  const exerciseTag = exercise.tag;
  const exerciseId = exercise.id;
  const exerciseLink = {
    pathname: "/workoutItem",
    state: { tag: exerciseTag, exerciseId },
    // tag: exercise.tag,
    //  exerciseId: exercise.id,
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
        <div>
          <p>{exercise.title}</p>
        </div>
        <div className="break"></div>
        <div className="workout__details">
          <span className="label title">{exercise.exerciseType}</span>

          <span className="label duration">{exercise.duration} mins</span>
        </div>
      </div>
    </div>
  );
};

export default ExerciseItem;
