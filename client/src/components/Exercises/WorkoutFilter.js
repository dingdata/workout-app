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
    <div className="filter-container">
      <div className="filter-title">
        <div>
          <img
            className="filter-icon"
            src={`./images/${filterImageSource}`}
            alt="exercisetype"
          />
          {filterName}
        </div>
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
