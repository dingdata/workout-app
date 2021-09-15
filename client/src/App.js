import "./App.css";
import { Nav, Navbar, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Login from "./components/UserLogin/login";
import Signup from "./components/signup";
import DisplayAll from "./components/Exercises/DisplayAll";

import HowItWorks from "./components/howItWorks";
import Home from "./components/Home/Home";
import LoggedInUser from "./components/LoggedInUser";
import DisplayRandom from "./components/Exercises/DisplayRandom";
import DisplayWorkoutItem from "./components/Exercises/DisplayWorkoutItem";

import { UserContext } from "./context/user";
import { useCurrentUserHook } from "./hooks/useCurrentUserHook";

function App() {
  //currentUserHook for updating/retrieving login user
  const { currentUser, setCurrentUser } = useCurrentUserHook();
  return (
    <div className="App">
      <UserContext.Provider value={currentUser}>
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
              {currentUser && (
                <Nav.Link as={Link} to="/allWorkouts" eventKey="link-2">
                  All Workouts
                </Nav.Link>
              )}

              {currentUser && (
                <div className="nav-link-right-aligned">
                  <Navbar.Text>Welcome, {currentUser.username}!</Navbar.Text>
                  <Link style={{ textDecoration: "none" }}>
                    <div className="label title">logout</div>
                  </Link>
                </div>
              )}
              {!currentUser && (
                <div className="nav-link-right-aligned">
                  {" "}
                  <Link
                    as={Link}
                    to="/login"
                    eventKey="link-3"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="button__primary button__link">Login</div>
                  </Link>
                  <Link
                    as={Link}
                    to="/signup"
                    eventKey="link-4"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="button__secondary button__link">
                      Sign Up
                    </div>
                  </Link>
                </div>
              )}
            </Nav>
          </Navbar>

          <Switch>
            {/* <Route exact path="/Home" component={Home} /> */}

            <Route
              exact
              path="/Home"
              component={() => <Home currentUser={currentUser} />}
            />

            <Route exact path="/howItWorks" component={HowItWorks} />
            <Route
              exact
              path="/Home"
              component={() => <Home currentUser={currentUser} />}
            />
            {currentUser && (
              <div>
                {" "}
                <Route exact path="/allWorkouts" component={DisplayAll} />
                <Route
                  exact
                  path="/workoutItem"
                  component={DisplayWorkoutItem}
                />
                <Route exact path="/LoggedInMain" component={LoggedInUser} />
              </div>
            )}
            {!currentUser && (
              <div>
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/login" component={Login} />{" "}
                <Route exact path="/random" component={DisplayRandom} />
              </div>
            )}
          </Switch>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
