import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.scss";
import HelloWorld from "./components/HelloWorld.jsx";
import { BrowserRouter, Route } from "react-router-dom";
import Root from "./components/Root.jsx";

ReactDOM.render(<Root />, document.getElementById("root"));
