import React from "react";
import "./home.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/carousel_plank.jpg"
            alt="c_plank"
          />
          <Carousel.Caption>
            <div>Take it easy and enjoy the workout</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/carousel_parentkid.jpg"
            alt="c_parentkid"
          />
          <Carousel.Caption>
            <div>Exercise is one the best family bonding activity</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            href="https://www.cheekiemonkie.net/2021/02/off-the-beaten-track-hiking-trails-singapore-for-families.html" //NOT WORKING
            src="./images/carousel_couple.jpg"
            alt="c_couple"
          />
          <Carousel.Caption>
            <div>Workout and get fit together</div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
