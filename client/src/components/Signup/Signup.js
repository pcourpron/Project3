import React, { Component } from "react";
import {
  Button,
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";
// import LoadingButton from "../LoadingButton/LoadingButton";
import "./Signup.css";
import axios from "axios";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: "",
      password: "",
      passwordConf: "",
      // confirmationCode: "",
      // newUser: null
      
      // state = {
      //   email: "",
      //   username: "",
      //   password: "",
      //   passwordConf: ""
      // }
      

      
    };
  }

  validateForm = () => {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.passwordConf
    );
  }

  // validateConfirmationForm() {
  //   return this.state.confirmationCode.length > 0;
  // }

  // handleChange = event => {
  //   this.setState({
  //     [event.target.id]: event.target.value
  //   });
  // }
  
  handleChange = event => {
    this.setState({
        // [key]: e.target.value
        [event.target.id]: event.target.value
    }, () => {
      console.log(this.state)
    })
  }

  // handleSubmit = async event => {
  //   event.preventDefault();

  //   this.setState({ isLoading: true });

  //   this.setState({ newUser: "test" });

  //   this.setState({ isLoading: false });
  // }
  handleSubmit = (e) => {
      e.preventDefault();
      if (!this.state.password === this.state.passwordConf){
        console.log("Passwords are not matching")
        return;
      }
  
      const body = {
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
        passwordConf: this.state.passwordConf
      }
  
      axios.post("/submit", body ).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    }

  handleConfirmationSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });
  }

  // renderConfirmationForm() {
  //   return (
  //     <form onSubmit={this.handleConfirmationSubmit}>
  //       <FormGroup controlId="confirmationCode" bsSize="large">
  //         <ControlLabel><h1>Confirmation Code</h1></ControlLabel>
  //         <FormControl
  //           autoFocus
  //           type="tel"
  //           value={this.state.confirmationCode}
  //           onChange={(event)=>{this.handleChange(event)}}
  //         />
  //         <HelpBlock><h6>Please check your email for the code.</h6></HelpBlock>
  //       </FormGroup>
  //       <LoadingButton
  //         block
  //         bsSize="large"
  //         disabled={!this.validateConfirmationForm()}
  //         type="submit"
  //         isLoading={this.state.isLoading}
  //         text="Verify"
  //         loadingText="Verifying…"
  //       />
  //     </form>
  //   );
  // }

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel><h4>Email</h4></ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={this.state.email}
            onChange={(event)=>{this.handleChange(event)}}
          />
        </FormGroup>
        <FormGroup controlId="username" bsSize="large">
          <ControlLabel><h4>Username</h4></ControlLabel>
          <FormControl
            autoFocus
            type="username"
            value={this.state.username}
            onChange={(event)=>{this.handleChange(event)}}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel><h4>Password</h4></ControlLabel>
          <FormControl
            value={this.state.password}
            onChange={(event)=>{this.handleChange(event)}}
            type="password"
          />
        </FormGroup>
        <FormGroup controlId="passwordConf" bsSize="large">
          <ControlLabel><h4>Confirm Password</h4></ControlLabel>
          <FormControl
            value={this.state.passwordConf}
            onChange={(event)=>{this.handleChange(event)}}
            type="password"
          />
        </FormGroup>
        <Button
          block
          bsSize="large"
          disabled={!this.validateForm()}
          type="submit"
        >
          Submit
        </Button>
      </form>
    );
  }

  render() {
    return (
      <div className ="container-signup">
          <div className = "home-button">
            <a href="/" type="button" className="btn-btn-light btn-lg active">Back Home!</a>
            <div className = "hometext">
              <div id = "htext">
                <p>If you choose to go back to home page!</p>
              </div>
            </div>
          </div>
        <div className="Signup">
        <h2>Create New Account!</h2>
            {/* {this.state.newUser === null
              ? this.renderForm()
              : this.renderConfirmationForm()} */}
              {this.renderForm()}
        </div>
      </div>
    );
  }
}