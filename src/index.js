import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import HelloWorld from "./components/hello-world";
import NotFound from "./components/not-found";
import "./stylesheets/styles.scss";

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/will-not-match">Will Not Match</Link>
        </li>
      </ul>

      <hr />

      <Switch>
        <Route exact path="/" component={HelloWorld} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
