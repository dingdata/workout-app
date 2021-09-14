import React, { useState, useEffect } from "react";
import api from "../constants/api";
import YoutubeIframe from "./Exercises/YoutubeIframe";

const axios = require("axios");

const DisplayRandom = () => {
  const [tag, setTag] = useState("");

  const getExercise = async () => {
    const url = api.exercises + "/random";
    let resp = await axios(url);
    setTag(resp.data.tag);
  };
  useEffect(() => {
    getExercise();
  }, []);

  return (
    <div>
      <div>
        {!tag && <div>Video not available</div>}
        {tag && <YoutubeIframe tag={tag} />}
      </div>
    </div>
  );
};

export default DisplayRandom;
