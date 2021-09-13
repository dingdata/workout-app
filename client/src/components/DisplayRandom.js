import React, { useState, useEffect } from "react";
import api from "../constants/api";
import { Link } from "react-router-dom";

const axios = require("axios");

const DisplayRandom = () => {
  const [tag, setTag] = useState("");

  const getExercise = async () => {
    const url = api.server + "/exercises/random";
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
        {tag && (
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${tag}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        )}
      </div>
      <div>
        <Link className="button__primary button__link" to="/random">
          Start Now!
        </Link>
      </div>
    </div>
  );
};

export default DisplayRandom;
