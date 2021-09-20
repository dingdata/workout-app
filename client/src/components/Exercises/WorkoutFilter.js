import React from "react";
import PrefCheckbox from "./PrefCheckbox";

const WorkoutFilter = ({
  filterType,
  clickHandler,
  checkAll,
  filterName,
  filterImageSource,
}) => {
  return (
    <div className="display-all-container">
      <div className="filter-title label-exerciseType">
        <div>
          <img
            className="exercise-img"
            src={`./images/${filterImageSource}`}
            alt="exercisetype"
          />
        </div>
        <div>{filterName}:</div>
      </div>
      <div className="filter-content">
        <div className="pref-filter-container">
          {filterType.map((type) => (
            <PrefCheckbox
              type={type.type}
              display={type.display}
              checked={type.check}
              handleClick={clickHandler}
            />
          ))}
          <div className="break"></div>
          {checkAll && (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkoutFilter;
