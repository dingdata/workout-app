import React, { useState, useEffect } from "react";
import api from "../../constants/api";
import ExerciseItem from "./ExerciseItem";

const axios = require("axios");

const DisplayAll = () => {
  const [exerciseList, setExerciseList] = useState([]);

  const getAllExercise = async () => {
    const url = api.exercises + "/";
    let resp = await axios(url);
    console.log(resp.data);
    setExerciseList(resp.data);
  };
  useEffect(() => {
    getAllExercise();
  }, []);

  const isLoaded = () => {
    if (exerciseList.length === 0) return false;
    else return true;
  };

  return (
    <div>
      {!isLoaded && <div>Loading...</div>}
      {isLoaded &&
        exerciseList.map((exercise) => (
          <div>
            <ExerciseItem exercise={exercise}></ExerciseItem>
          </div>
        ))}
    </div>
  );
};

export default DisplayAll;
