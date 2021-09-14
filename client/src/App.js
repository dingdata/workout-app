import "./App.css";
import { Nav, Navbar, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import DisplayAll from "./components/Exercises/DisplayAll";

import HowItWorks from "./components/howItWorks";
import Home from "./components/Home/Home";
import LoggedInUser from "./components/LoggedInUser";
import DisplayRandom from "./components/DisplayRandom";
import DisplayWorkoutItem from "./components/Exercises/DisplayWorkoutItem";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar bg="light" variant="light" defaultActiveKey="/random">
          <Nav.Link as={Link} to="/Home">
            <Image
              src={process.env.PUBLIC_URL + "/images/logo.png"}
              width="50px"
            />
          </Nav.Link>
          <Nav>
            <Nav.Link
              as={Link}
              to="/howItWorks"
              data-testid="ti_nav_howitworks"
              className="nav-link-text"
              eventKey="link-1"
            >
              How it works
            </Nav.Link>
            <Nav.Link as={Link} to="/allWorkouts" eventKey="link-2">
              All Workouts
            </Nav.Link>
            <div className="nav-link-right-aligned">
              <Link
                as={Link}
                to="/login"
                eventKey="link-3"
                style={{ textDecoration: "none" }}
              >
                <div className="button__secondary button__link">Login</div>
              </Link>
              <Link
                as={Link}
                to="/signup"
                eventKey="link-4"
                style={{ textDecoration: "none" }}
              >
                <div className="button__secondary button__link">Sign Up</div>
              </Link>
            </div>
          </Nav>
        </Navbar>

        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/allWorkouts" component={DisplayAll} />
          <Route exact path="/random" component={DisplayRandom} />
          <Route exact path="/workoutItem" component={DisplayWorkoutItem} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/LoggedInMain" component={LoggedInUser} />

          <Route exact path="/howItWorks" component={HowItWorks} />
          <Route exact path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
