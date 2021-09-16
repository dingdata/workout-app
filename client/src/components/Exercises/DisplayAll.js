import React, { useState, useEffect, useCallback } from "react";
import api from "../../constants/api";
import "./DisplayAll.css";
import ExerciseItem from "./ExerciseItem";
import PrefCheckbox from "./PrefCheckbox";
const axios = require("axios");

const DisplayAll = () => {
  const [exerciseList, setExerciseList] = useState([]);
  const exerciseType = [
    { type: "Yoga", check: true },
    { type: "HIIT", check: true },
    { type: "Kids", check: true },
    { type: "Cardio Dance", check: true },
    { type: "Abs", check: true },
    { type: "Barre", check: true },
    { type: "Kickboxing", check: true },
    { type: "Lower Body", check: true },
    { type: "Upper Body", check: true },
    { type: "Stretch", check: true },
    { type: "Pilates", check: true },
    { type: "Zumba", check: true },
    { type: "Zumba Gold", check: true },
    { type: "Mindfulness", check: true },
    { type: "Tabata", check: true },
    { type: "KpopX Fitness", check: true },
  ];
  const [filterBody, setFilterBody] = useState({ exerciseType });

  const getFilterExercise = useCallback(async () => {
    const url = api.exercises + "/filterByExerciseType";

    let selectedFilter = filterBody.exerciseType
      .filter((type) => type.check === true)
      .map((type) => type.type);

    let resp = await axios.post(url, { exerciseType: selectedFilter });

    setExerciseList(resp.data);
  }, [filterBody]);

  useEffect(() => {
    getFilterExercise();
  }, [getFilterExercise]);

  const isLoaded = () => {
    console.log("Is Loaded" + exerciseList.length);
    if (exerciseList.length === 0) return false;
    else return true;
  };

  const filterTypeClickHandler = (type, check) => {
    let targetExerciseTypeIndex = filterBody.exerciseType.findIndex(
      (exerciseType) => exerciseType.type === type
    );
    let copyOriginalState = [...filterBody.exerciseType];
    copyOriginalState[targetExerciseTypeIndex].check = check;
    setFilterBody({ ...filterBody, exerciseType: [...copyOriginalState] });
  };

  const checkAll = (state) => {
    let copyState = filterBody.exerciseType.map((type) => {
      return { ...type, check: state };
    });
    setFilterBody({ ...filterBody, exerciseType: [...copyState] });
  };
  return (
    <div className="workout-container">
      <div className="display-all-container">
        <div className="filter-title label-exerciseType">
          <div>Image</div>
          <div>Exercise Type:</div>
        </div>
        <div className="filter-content">
          <div className="pref-filter-container">
            {filterBody.exerciseType.map((type) => (
              <PrefCheckbox
                type={type.type}
                checked={type.check}
                handleClick={filterTypeClickHandler}
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

      <hr class="solid" />
      <div className="workouts">
        {!isLoaded && <div>Loading...</div>}
        {isLoaded &&
          exerciseList.map((exercise) => (
            <ExerciseItem exercise={exercise}></ExerciseItem>
          ))}
      </div>
    </div>
  );
};

export default DisplayAll;
