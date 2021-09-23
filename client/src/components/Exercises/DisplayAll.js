import React, { useState, useEffect, useCallback, useContext } from "react";
import { api } from "../../constants/api";
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
      .map((type) => type.type)[0];
    if (selectedDuration === "All Durations") {
      selectedDuration = 999;
    }

    let selectedNeedEquipment = userPref.needEquipment[0].check;

    let resp = await axios.post(url, {
      exerciseType: selectedFilter,
      duration: selectedDuration,
      needEquipment: selectedNeedEquipment,
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

  const durationClickHandler = (type) => {
    let targetDurationIndex = userPref.duration.findIndex(
      (duration) => duration.type === type
    );
    let copyOriginalState = [...userPref.duration];
    copyOriginalState.map((duration) => (duration.check = false));
    copyOriginalState[targetDurationIndex].check = true;
    setUserPref({ ...userPref, duration: [...copyOriginalState] });
  };

  const needEquipmentClickHandler = (type, check) => {
    let copyOriginalState = [...userPref.needEquipment];
    copyOriginalState[0].check = check;
    copyOriginalState[0].type = check;
    setUserPref({ ...userPref, needEquipment: [...copyOriginalState] });
  };

  const checkAll = (state) => {
    let copyState = userPref.exerciseType.map((type) => {
      return { ...type, check: state };
    });
    setUserPref({ ...userPref, exerciseType: [...copyState] });
  };
  return (
    <div id="display-all-container" className="workout-container">
      <div id="display-all-sidebar">
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
          filterImageSource="duration.png"
          filterName="Max Duration"
        />
        <WorkoutFilter
          filterType={userPref.needEquipment}
          clickHandler={needEquipmentClickHandler}
          filterImageSource="dumbbell_filter.png"
          filterName="Equipment"
        />
      </div>
      <div id="display-all-content">
        <div className="workouts">
          {!isLoaded && <div>Loading...</div>}
          {isLoaded &&
            exerciseList.map((exercise) => (
              <ExerciseItem exercise={exercise}></ExerciseItem>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayAll;
