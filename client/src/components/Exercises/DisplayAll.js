import React, { useState, useEffect, useCallback, useContext } from "react";
import api from "../../constants/api";
import "./DisplayAll.css";
import ExerciseItem from "./ExerciseItem";
import WorkoutFilter from "./WorkoutFilter";
import { UserContext } from "../../context/user";
const axios = require("axios");

const DisplayAll = () => {
  const { userPref, setUserPref } = useContext(UserContext);
  console.log("inside DisplayAll");
  console.log(userPref);
  const [exerciseList, setExerciseList] = useState([]);

  const getFilterExercise = useCallback(async () => {
    const url = api.exercises + "/filterByExerciseType";

    let selectedFilter = userPref.exerciseType
      .filter((type) => type.check === true)
      .map((type) => type.type);

    let resp = await axios.post(url, { exerciseType: selectedFilter });

    setExerciseList(resp.data);
  }, [userPref]);

  useEffect(() => {
    getFilterExercise();
  }, [getFilterExercise]);

  const isLoaded = () => {
    console.log("Is Loaded" + exerciseList.length);
    if (exerciseList.length === 0) return false;
    else return true;
  };

  const filterTypeClickHandler = (type, check) => {
    let targetExerciseTypeIndex = userPref.exerciseType.findIndex(
      (exerciseType) => exerciseType.type === type
    );
    let copyOriginalState = [...userPref.exerciseType];
    copyOriginalState[targetExerciseTypeIndex].check = check;
    setUserPref({ ...userPref, exerciseType: [...copyOriginalState] });
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
        userPref={userPref}
        clickHandler={filterTypeClickHandler}
        checkAll={checkAll}
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
