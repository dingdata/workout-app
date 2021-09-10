import React, { useState } from "react";
const axios = require("axios");

const DisplayRandom = async () => {
  //   const [tag, setTag] = useState("");
  //   const server = "http://localhost:3000/api";
  //   const url = server + "/exercises/random";
  //   let resp = await axios(url);
  //   console.log(resp.body);
  //   setTag(resp.body.tag);
  return (
    <div>
      <div>Hello from DisplayRandom</div>
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/xCgcnty2SUE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default DisplayRandom;
