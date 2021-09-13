import "./App.css";
import { Nav, Navbar, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import DisplayRandom from "./components/DisplayRandom";

import HowItWorks from "./components/howItWorks";
import Home from "./components/home";
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
          <Nav className="me-auto ">
            <Nav.Link
              as={Link}
              to="/howItWorks"
              data-testid="ti_nav_howitworks"
              className="nav-link-text"
              eventKey="link-1"
            >
              How it works
            </Nav.Link>
            <Nav.Link as={Link} to="/random" eventKey="link-2">
              Random Exercise
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/login"
              className="nav-link-text nav-link-right-aligned"
              eventKey="link-3"
            >
              Login
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/signup"
              eventKey="link-4"
              className="nav-link-text nav-link-right-aligned"
            >
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar>

        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/random" component={DisplayRandom} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/howItWorks" component={HowItWorks} />
          <Route exact path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
