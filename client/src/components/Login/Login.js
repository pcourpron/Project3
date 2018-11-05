import React, { Component } from "react";
//import {Redirect} from "react-router-dom";
// import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
// import Loaderbutton from "../Loaderbutton/Loaderbutton.js";
import "./Login.css";

import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import axios from "axios";
//import { url } from "inspector";


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  submit = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='custom-ui d-flex justify-content-center'>
            <div className = 'col'>
            <p>Wrong Username/Password Combination </p>
            
            <button className = 'btn-danger' onClick={() => {
                
                onClose()
            }}>Go Back</button>
            </div>
          </div>
        )
      }
    })
  };
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
      password: this.state.password
    }

    axios.post("/login", loginBody).then(res => {
      console.log(res)
      if (res.data === false){
        this.submit()
      }
      else{
     this.props.handleToggleLogin(res.data.username, res.data.admin)
     this.props.history.history.push('/questionType')
      }

  })}
  
   render() {
     return(

  
     
      <div className="container-fluid-login" style ={ { backgroundImage: "url('https://images6.alphacoders.com/486/486293.png')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        minHeight: "100vh",
        position: "fixed",
        padding: "0",
        margin: "0", }}>>
              <form className = "logForm" onSubmit={this.handleSubmitLogin}>
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

      );
    }
  }

