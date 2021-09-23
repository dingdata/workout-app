import React from "react";
import "./HowItWorks.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import GuideItem from "./GuideItem";

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <div className="title">Using Get.Fit is easy</div>
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
      <div className="title">Member's Portal Preview</div>
      <img
        className="screenshot-img"
        src="./images/member_pg.png"
        alt="h_member"
      />
    </div>
  );
};

export default HowItWorks;
