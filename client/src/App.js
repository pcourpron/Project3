
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landingpage from "./components/Landingpage/Landingpage.js";
import Signup from "./components/Signup/Signup.js";
import Userlogin from "./components/Userlogin/Userlogin.js";
// import Product from "./components/pages/Product.js";
import Question from "./components/Question/Question"

const App = () => (
  <Router>
    <div className="container">
      {/* <Header/> */}
      <Route exact path="/" component={Landingpage} />
      <Route exact path="/Signup" component={Signup} />
      <Route exact path="/Userlogin" component={Userlogin} />
      <Route exact path="/Question" component = {Question}/>
    </div>
  </Router>
);

export default App;
