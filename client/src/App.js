import "./App.css";
import { Nav, Navbar, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";

import HowItWorks from "./components/howItWorks";
import Home from "./components/home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar bg="light" variant="light">
          
        <Nav.Link as={Link} to="/Home" data-testid="ti_nav_Home">
        <Image
            src={process.env.PUBLIC_URL + "/images/logo.png"}
            width="70px"
          /></Nav.Link>
            
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Home" data-testid="ti_nav_Home">
              {" "}
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/howItWorks"
              data-testid="ti_nav_howitworks"
            >
              How it works
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/login" data-testid="ti_nav_signup">
              Login
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/signup"
              data-testid="ti_nav_signup"
              align="right"
            >
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar>
        <br />
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />

          <Route exact path="/Home" component={Home} />
          <Route exact path="/howItWorks" component={HowItWorks} />
          <Route exact path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
