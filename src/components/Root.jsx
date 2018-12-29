import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HelloWorld from "./HelloWorld.jsx";
import NoMatch from "./NoMatch.jsx";

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact component={HelloWorld} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Root;
