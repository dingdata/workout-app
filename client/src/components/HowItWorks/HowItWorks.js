import React from "react";
import "./HowItWorks.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import GuideItem from "./GuideItem";

const HowItWorks = () => {
  return (
    <div className="workout-container how-it-works">
      <h2>Using Get.Fit is easy</h2>
      <div className="guide__container">
        <GuideItem
          image="./images/how_startnow.png"
          title="Try out the auto generated workout"
        >
          Sign up with us to enjoy Member's Perks
          <br></br>
        </GuideItem>

        <GuideItem image="./images/how_filter.png" title="Member Perks">
          Unlimited access to on-demand workouts.<br></br>
          Filter options available to better suit your needs.
        </GuideItem>

        <GuideItem image="./images/how_chart.png" title="Member Perks">
          Maximize your workouts with progress tracker<br></br>
          Build your own best workout routine
        </GuideItem>
      </div>
      <h2>Member's Portal Preview</h2>
      <img
        id="all-workouts-preview"
        src="./images/all_workouts_preview.png"
        alt="all workouts preview"
      />
    </div>
  );
};

export default HowItWorks;
