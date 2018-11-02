
import React, {Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landingpage from "./components/Landingpage/Landingpage.js";
import Signup from "./components/Signup/Signup.js";
import Login from "./components/Login/Login.js";
//import Product from "./components/pages/Product.js";

class App extends Component {
  state = {
    loggedIn: false
  };
  handleToggleLogin = () => {
    this.setState((prevState) => ({loggedIn: !prevState.loggedIn}));
  };
  render() {
    return (
      <Router>
        <div className="container">
          {/* <Header/> */}
          <Route exact path="/" component={Landingpage} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Login" component={Login} />
        </div>
      </Router>
    );
  }
};

export default App;
