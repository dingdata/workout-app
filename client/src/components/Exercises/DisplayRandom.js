import React, { useState, useEffect } from "react";
import api from "../../constants/api";
import YoutubeIframe from "./YoutubeIframe";
import { useHistory } from "react-router-dom";

const axios = require("axios");

const DisplayRandom = () => {
  const history = useHistory();

  const routeChange = () => {
    let path = `signup`;
    history.push(path);
  };

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
    <div className="workout-container">
      <div>
        {!tag && <div>Video not available</div>}
        {tag && <YoutubeIframe tag={tag} />}
      </div>
      <div className="home__slogan"> Want to track your workout? </div>
      <div>
        <p></p>
        <button
          className="button__secondary button__link"
          onClick={routeChange}
        >
          Start Now!
        </button>
      </div>
    </div>
  );
};

export default DisplayRandom;
