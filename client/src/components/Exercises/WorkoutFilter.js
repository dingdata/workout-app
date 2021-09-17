import React from "react";
import PrefCheckbox from "./PrefCheckbox";

const WorkoutFilter = ({ userPref, clickHandler, checkAll }) => {
  return (
    <div className="display-all-container">
      <div className="filter-title label-exerciseType">
        <div>
          <img
            className="exercise-img"
            src="./images/running.png"
            alt="exercisetype"
          />
        </div>
        <div>Exercise Type:</div>
      </div>
      <div className="filter-content">
        <div className="pref-filter-container">
          {userPref.exerciseType.map((type) => (
            <PrefCheckbox
              type={type.type}
              checked={type.check}
              handleClick={clickHandler}
            />
          ))}
          <div className="break"></div>
          <div className="filter-buttons">
            <div
              className="filter-all-button select-button select-all"
              onClick={() => checkAll(true)}
            >
              Select All
            </div>
            <div
              className="filter-all-button select-button unselect-all"
              onClick={() => checkAll(false)}
            >
              Unselect All
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutFilter;
