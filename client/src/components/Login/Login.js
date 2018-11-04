import React, { Component } from "react";
//import {Redirect} from "react-router-dom";
// import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
// import Loaderbutton from "../Loaderbutton/Loaderbutton.js";
import "./Login.css";
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      username: "",
      password: ""
    };
  }

  
  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }
  //handle new user change
  handleChange = event => {
    this.setState({
      // [key]: e.target.value
      [event.target.id]: event.target.value
    }, () => {
      console.log(this.state)
    })
  }

  //existing user
  handleSubmitLogin = (e) => {
  
    e.preventDefault();
    const loginBody = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      admin: false
    }
    console.log(loginBody)
    axios.post("/login", loginBody).then(res => {
      this.props.handleToggleLogin(this.setState.username)

      console.log(res.data);
    }).catch(err => {
      console.log(err);
    });
  }
  
   render(){
     return(
          <div className="Login">
              <form onSubmit={this.handleSubmitLogin}>
                  <FormGroup controlId="email" bsSize="large">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                      autoFocus
                      type="email"
                      value={this.state.email}
                      onChange={(event) => { this.handleChange(event) }}
                    />
                </FormGroup>
                  <FormGroup controlId="password" bsSize="large">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                      value={this.state.password}
                      onChange={(event) => { this.handleChange(event) }}
                      type="password"
                    />
                  </FormGroup>
                  <Button
                    block
                    bsSize="large"
                    disabled={!this.validateForm()}
                    type="submit"
                  >
                  Login
                  </Button>
              </form>
          </div>
          // <div className="container-login">
          //   <div className = "home-button">
          //       <a href="/" type="button" className="btn-btn-light btn-lg active">Back Home!</a>
          //     <div className="hometext">
          //       <div id="htext">
          //         <p>If you choose to go back to home page!</p>
          //       </div>
          //     </div>
          //   </div>
          // </div>
      );
    }
  }
