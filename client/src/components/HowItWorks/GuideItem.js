import React from "react";
import "./HowItWorks.scss";

const GuideItem = ({ image, title, children }) => {
  return (
    <div className="guide-item">
      <img className="guide-image" src={image} alt={image} />
      <div className="description">
        <h5 className="description-title">{title}</h5>
        {children}
      </div>
    </div>
  );
};

export default GuideItem;
