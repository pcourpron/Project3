import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App render = {({history}) => history = {history}} />, document.getElementById("root"));
registerServiceWorker();
