import "./index.scss";
// ES6
import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { BrowserRouter as Router} from "react-router-dom";

// ES5
//const React = require("react");

ReactDOM.render(
        <Router>
            <App/>
        </Router>,
        document.getElementById("root")
);
