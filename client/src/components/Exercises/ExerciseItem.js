import React from "react";
import { Link } from "react-router-dom";
import "./ExerciseItem.scss";

const ExerciseItem = ({ exercise }) => {
  const exerciseLink = {
    pathname: "/workout-item",
    state: { tag: exercise.tag, exerciseId: exercise.id },
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
          <div className="label title_label">
            <div>{exercise.exerciseType}</div>
          </div>
          <div className="label duration_label">{exercise.duration} mins</div>
        </div>
        {exercise.needEquipment && (
          <img
            className="dumbbell"
            src={process.env.PUBLIC_URL + "/images/dumbbell.png"}
            alt="equipment required icon"
          ></img>
        )}
      </div>
    </div>
  );
};

export default ExerciseItem;
