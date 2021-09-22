import React from "react";
import "./howItWorks.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

const howItWorks = () => {
  return (
    <div>
      <div className="home__slogan">Using Get.Fit is easy</div>
      <div className="how-container">
        <Card>
          <Card.Img variant="top" src="./images/startnow.png" alt="h_start" />
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
            variant="top"
            src="./images/howitworks_start.png"
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
            variant="top"
            src="./images/howitworks_start.png"
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
    </div>
  );
};

export default howItWorks;
