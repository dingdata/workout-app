import React from "react";

const YoutubeIframe = ({ tag }) => {
  return (
    <div>
      <iframe
        width="1074"
        height="528"
        src={`https://www.youtube.com/embed/${tag}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default YoutubeIframe;
