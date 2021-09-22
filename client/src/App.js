import "./App.scss";
import { Nav, Navbar, Image, NavItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import { IndexLinkContainer } from "react-router-bootstrap";
import Login from "./components/UserLogin/login";
import Signup from "./components/signup";
import DisplayAll from "./components/Exercises/DisplayAll";

import MyProgress from "./components/MyProgress";
import Home from "./components/Home/Home";
import DisplayRandom from "./components/Exercises/DisplayRandom";
import DisplayWorkoutItem from "./components/Exercises/DisplayWorkoutItem";

import { UserContext } from "./context/user";
import { useCurrentUserHook } from "./hooks/useCurrentUserHook";
import { useUserPrefHook } from "./hooks/useUserPrefHook";
import axios from "axios";
import api from "../src/constants/api";
import howItWorks from "./components/howItWorks";

function App() {
  //currentUserHook for updating/retrieving login user
  const { currentUser, setCurrentUser } = useCurrentUserHook();
  const { userPref, setUserPref } = useUserPrefHook();

  const logOut = async () => {
    const res = await axios.post(api.usersLogout, {});
    if (res.status === 200) {
      setCurrentUser(null);
    }
  };
  return (
    <div className="App">
      <UserContext.Provider
        value={{ currentUser, setCurrentUser, userPref, setUserPref }}
      >
        <BrowserRouter>
          <Navbar bg="light" variant="light" sticky="top">
            <Nav.Link as={Link} to="/Home">
              <Image
                src={process.env.PUBLIC_URL + "/images/logo.png"}
                width="50px"
              />
            </Nav.Link>
            <Nav>
              <IndexLinkContainer to="/howItWorks">
                <NavItem className="nav-link">How It Works</NavItem>
              </IndexLinkContainer>

              {currentUser && (
                <>
                  <IndexLinkContainer to="/allWorkouts">
                    <NavItem className="nav-link">All Workouts</NavItem>
                  </IndexLinkContainer>
                  <IndexLinkContainer to="/myProgress">
                    <NavItem className="nav-link">My Progress</NavItem>
                  </IndexLinkContainer>
                  <div className="nav-link-right-aligned">
                    <NavItem className="nav-link">
                      Welcome, {currentUser.firstName} !
                    </NavItem>
                    <IndexLinkContainer to="/home">
                      <div className="label title" onClick={logOut}>
                        logout
                      </div>
                    </IndexLinkContainer>
                  </div>
                </>
              )}

              {!currentUser && (
                <div className="nav-link-right-aligned">
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
            <Route exact path="/Home" component={() => <Home />} />
            <Route exact path="/howItWorks" component={howItWorks} />
            <Route exact path="/" component={() => <Home />} />

            {currentUser && (
              <>
                <Route exact path="/myProgress" component={MyProgress} />
                <Route
                  exact
                  path="/allWorkouts"
                  component={() => <DisplayAll />}
                />
                <Route
                  exact
                  path="/workoutItem"
                  component={DisplayWorkoutItem}
                />
              </>
            )}

            {!currentUser && (
              <>
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/random" component={DisplayRandom} />
              </>
            )}
          </Switch>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
