import "./App.scss";
import {
  Nav,
  Navbar,
  Image,
  NavItem,
  Containe,
  NavDropdownr,
  NavDropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import { IndexLinkContainer } from "react-router-bootstrap";
import UserLogin from "./components/UserLogin/UserLogin";
import Signup from "./components/signup";
import DisplayAll from "./components/Exercises/DisplayAll";

import MyProgress from "./components/MyProgress/MyProgress";
import Home from "./components/Home/Home";
import DisplayRandom from "./components/Exercises/DisplayRandom";
import DisplayWorkoutItem from "./components/Exercises/DisplayWorkoutItem";

import { UserContext } from "./context/user";
import { useCurrentUserHook } from "./hooks/useCurrentUserHook";
import { useUserPrefHook } from "./hooks/useUserPrefHook";
import axios from "axios";
import { api } from "../src/constants/api";
import HowItWorks from "./components/HowItWorks/HowItWorks";

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
          <Navbar
            bg="light"
            expand="lg"
            variant="light"
            sticky="top"
            collapseOnSelect
          >
            <Nav.Link as={Link} to="/Home">
              <Image
                src={process.env.PUBLIC_URL + "/images/logo.png"}
                width="50px"
              />
            </Nav.Link>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <IndexLinkContainer to="/how-it-works">
                  <NavItem className="nav-link">How It Works</NavItem>
                </IndexLinkContainer>
                {currentUser && (
                  <>
                    <div className="nav-link-right-aligned">
                      <NavItem id="navbar__welcome">
                        Welcome, {currentUser.firstName}!
                      </NavItem>
                      <IndexLinkContainer to="/home">
                        <div
                          className="button__secondary button__link"
                          onClick={logOut}
                        >
                          Logout
                        </div>
                      </IndexLinkContainer>
                    </div>
                    <IndexLinkContainer to="/all-workouts">
                      <NavItem className="nav-link">All Workouts</NavItem>
                    </IndexLinkContainer>
                    <IndexLinkContainer to="/my-progress">
                      <NavItem className="nav-link">My Progress</NavItem>
                    </IndexLinkContainer>
                  </>
                )}
                {!currentUser && (
                  <div className="nav-link-center-aligned">
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
                )}{" "}
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Switch>
            <Route exact path="/Home" component={() => <Home />} />
            <Route exact path="/how-it-works" component={HowItWorks} />
            <Route exact path="/" component={() => <Home />} />

            {currentUser && (
              <>
                <Route exact path="/my-progress" component={MyProgress} />
                <Route
                  exact
                  path="/all-workouts"
                  component={() => <DisplayAll />}
                />
                <Route
                  exact
                  path="/workout-item"
                  component={DisplayWorkoutItem}
                />
              </>
            )}

            {!currentUser && (
              <>
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/login" component={UserLogin} />
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
