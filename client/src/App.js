import "./App.css";
import { Nav, Navbar, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import DisplayAll from "./components/Exercises/DisplayAll";

import HowItWorks from "./components/howItWorks";
import Home from "./components/home";
import LoggedInUser from "./components/loggedInUser";
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
              <Nav.Link
                as={Link}
                to="/login"
                className="nav-link-text  "
                eventKey="link-3"
              >
                Login
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/signup"
                eventKey="link-4"
                className="nav-link-text  "
              >
                Sign Up
              </Nav.Link>
            </div>
          </Nav>
        </Navbar>

        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/allWorkouts" component={DisplayAll} />
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
