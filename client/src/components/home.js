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
            src="./images/carousel_gal.jpg"
            alt="c_gal"
          />
          <Carousel.Caption>
            <div>Smile and breathe during the workout</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/carousel_parentkid.jpg"
            alt="c_parentkid"
          />
          <Carousel.Caption>
            <div>Exercise is the best family bonding activity</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/carousel_couple.jpg"
            alt="c_couple"
          />
          <Carousel.Caption>
            <div>Get fit together with your partner or buddy</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/carousel_guy.jpg"
            alt="c_guy"
          />
          <Carousel.Caption>
            <div>Exercise is the best for self care</div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
