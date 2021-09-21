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
            alt="exercise preview thumbnail"
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
        {/* TODO: display below ONLY if equipment is required */}
        <img
          className="dumbbell"
          src={process.env.PUBLIC_URL + "/images/dumbbell.png"}
          alt="equipment required icon"
        ></img>
      </div>
    </div>
  );
};

export default ExerciseItem;
