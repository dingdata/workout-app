import "./App.css";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header />
        <Navbar bg="dark" variant="dark">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/login" data-testid="ti_nav_signup">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/signup" data-testid="ti_nav_signup">
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar>
        <br />
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />

          <Route exact path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
