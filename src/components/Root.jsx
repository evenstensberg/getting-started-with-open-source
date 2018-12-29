import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HelloWorld from "./HelloWorld.jsx";

const Root = props => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HelloWorld} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

function NoMatch({ location }) {
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default Root;
