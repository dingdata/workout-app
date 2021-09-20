import React, { useState, useEffect, useCallback, useContext } from "react";
import api from "../../constants/api";
import "./DisplayAll.css";
import ExerciseItem from "./ExerciseItem";
import WorkoutFilter from "./WorkoutFilter";
import { UserContext } from "../../context/user";
const axios = require("axios");

const DisplayAll = () => {
  const { userPref, setUserPref } = useContext(UserContext);
  const [exerciseList, setExerciseList] = useState([]);

  const getFilterExercise = useCallback(async () => {
    const url = api.exercises + "/filterByPreferences";

    let selectedFilter = userPref.exerciseType
      .filter((type) => type.check === true)
      .map((type) => type.type);

    let selectedDuration = userPref.duration
      .filter((type) => type.check === true)
      .map((type) => type.type);

    let resp = await axios.post(url, {
      exerciseType: selectedFilter,
      duration: selectedDuration,
    });

    setExerciseList(resp.data);
  }, [userPref]);

  useEffect(() => {
    getFilterExercise();
  }, [getFilterExercise]);

  const isLoaded = () => {
    if (exerciseList.length === 0) return false;
    else return true;
  };

  const exerciseTypeClickHandler = (type, check) => {
    let targetExerciseTypeIndex = userPref.exerciseType.findIndex(
      (exerciseType) => exerciseType.type === type
    );
    let copyOriginalState = [...userPref.exerciseType];
    copyOriginalState[targetExerciseTypeIndex].check = check;
    setUserPref({ ...userPref, exerciseType: [...copyOriginalState] });
  };

  const durationClickHandler = (type, check) => {
    let targetDurationIndex = userPref.duration.findIndex(
      (duration) => duration.type === type
    );
    let copyOriginalState = [...userPref.duration];
    copyOriginalState.map((duration) => (duration.check = false));
    copyOriginalState[targetDurationIndex].check = true;
    setUserPref({ ...userPref, duration: [...copyOriginalState] });
  };

  const checkAll = (state) => {
    let copyState = userPref.exerciseType.map((type) => {
      return { ...type, check: state };
    });
    setUserPref({ ...userPref, exerciseType: [...copyState] });
  };
  return (
    <div className="workout-container">
      <WorkoutFilter
        filterType={userPref.exerciseType}
        clickHandler={exerciseTypeClickHandler}
        checkAll={checkAll}
        filterImageSource="running.png"
        filterName="Exercise Type"
      />
      <WorkoutFilter
        filterType={userPref.duration}
        clickHandler={durationClickHandler}
        filterImageSource="running.png"
        filterName="Duration"
      />

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
