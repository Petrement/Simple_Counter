import React from "react";
import ReactDOM from "react-dom";

import "../styles/index.css";
import SimpleCounter from "./component/SimpleCounter.jsx";

let counter = 0;
setInterval(() => {
    ReactDOM.render(<SimpleCounter counter={counter}/>, document.querySelector("#app"));
    counter++;
}, 1000);