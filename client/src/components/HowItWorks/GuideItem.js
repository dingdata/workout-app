import React from "react";
import "./HowItWorks.scss";

const GuideItem = ({ image, title, children }) => {
  return (
    <div className="guide__item">
      <div class="guide__image-container">
        <img className="guide__image" src={image} alt={image} />
      </div>
      <div className="guide__description">
        <h5 className="guide__title">{title}</h5>
        {children}
      </div>
    </div>
  );
};

export default GuideItem;
