import React, { useState, useEffect, useCallback, useContext } from "react";
import api from "../../constants/api";
import "./DisplayAll.css";
import ExerciseItem from "./ExerciseItem";
import PrefCheckbox from "./PrefCheckbox";
//import { UserContext } from "../../context/user";

const axios = require("axios");

const DisplayAll = () => {
  //const { currentUser, setCurrentUser } = useContext(UserContext);

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
  // if (!currentUser.filterBody) {
  //   setCurrentUser({ ...currentUser, filterBody: { exerciseType } });
  // }
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
    setFilterBody({ exerciseType: [...copyOriginalState] });
  };
  // console.log(currentUser);
  // console.log(filterBody);

  return (
    <div className="workout-container">
      <div className="filter-title">Exercise Type:</div>
      <div className="pref-filter-container">
        {filterBody.exerciseType.map((type) => (
          <PrefCheckbox
            type={type.type}
            checked={type.check}
            handleClick={filterTypeClickHandler}
          />
        ))}
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
