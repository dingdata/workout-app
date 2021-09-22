import React from "react";
import "./howItWorks.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

const howItWorks = () => {
  return (
    <div>
      <div className="workout-container how-slogan">Using Get.Fit is easy</div>
      <div className="how-container">
        <Card>
          <Card.Img
            variant="top howcard-img"
            src="./images/how_startnow.png"
            alt="h_start"
          />
          <Card.Body>
            <Card.Title>Non Member</Card.Title>
            <Card.Text>
              Try out the auto generated workout.{" "}
              <p>Sign Up with us to enjoy Member's Perks</p>{" "}
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img
            variant="top howcard-img"
            src="./images/how_filter.png"
            alt="h_filter"
          />
          <Card.Body>
            <Card.Title>Member Perks</Card.Title>
            <Card.Text>
              Unlimited access to on-demand workouts.
              <br></br>
              <p>Filter options available to better suit your needs.</p>{" "}
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img
            variant="top howcard-img"
            src="./images/how_chart.png"
            alt="h_tracker"
          />
          <Card.Body>
            <Card.Title>Member Perks</Card.Title>
            <Card.Text>
              Maximize your workouts with progress tracker{" "}
              <p> Build your own best workout routine</p>{" "}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="how-slogan">
        Member's Portal Preview
        <div>
          <img
            className="screenshot-img"
            src="./images/member_pg.png"
            alt="h_member"
          />
        </div>
      </div>
    </div>
  );
};

export default howItWorks;
