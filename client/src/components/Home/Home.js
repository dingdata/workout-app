import React, { useContext } from "react";
import "./Home.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/user";

const Home = () => {
  const history = useHistory();
  const { currentUser } = useContext(UserContext);

  const routeChange = () => {
    let path = "";
    if (!currentUser) {
      path = `random`;
    } else {
      path = `allWorkouts`;
    }
    history.push(path);
  };

  return (
    <div className="homebg-image workout-container ">
      <Carousel fade nextIcon="" nextLabel="" prevIcon="" prevLabel="">
        <Carousel.Item>
          <img src="./images/carousel_gal.png" alt="c_gal" />
          <Carousel.Caption>
            Our only goal is to help you reach your goal
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="./images/carousel_buddies.png" alt="c_buddies" />
          <Carousel.Caption>
            <div>Get fit together with your friends</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="./images/carousel_parentkid.png" alt="c_parentkid" />
          <Carousel.Caption>
            <div>Exercise is the best family bonding activity</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="./images/carousel_senior.png" alt="c_senior" />
          <Carousel.Caption>
            <div>Exercise is the best form of self care</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="./images/carousel_pet.png" alt="c_pets" />
          <Carousel.Caption>
            <div>Even your pets can join in the fun!</div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="home__slogan">
        We offer well curated and effective workout videos you can do anywhere
        and anytime!
      </div>
      <div>
        <button
          className="button__secondary button__link"
          onClick={routeChange}
        >
          Start Now!
        </button>
      </div>
    </div>
  );
};

export default Home;
