import React from "react";
import "./HowItWorks.scss";

const GuideItem = ({ image, title, children }) => {
  return (
    <div className="guide-item">
      <div class="guide-image-container">
        <img className="guide-image" src={image} alt={image} />
      </div>
      <div className="guide-description">
        <h5 className="description-title">{title}</h5>
        {children}
      </div>
    </div>
  );
};

export default GuideItem;
