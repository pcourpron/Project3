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
import {Link} from "react-router-dom";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: "",
      password: "",
      passwordConf: ""
    };
  }

  validateForm = () => {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.passwordConf
    );
  }

  handleChange = event => {
    this.setState({
        // [key]: e.target.value
        [event.target.id]: event.target.value
    }, () => {
      console.log(this.state)
    })
  }

  handleSubmit = (e) => {
      e.preventDefault();
      if (!this.state.password === this.state.passwordConf){
        console.log("Passwords are not matching")
        return;
      }
      console.log(this.props.history)
  
      const body = {
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
        passwordConf: this.state.passwordConf,
        admin: false
      }
  
      axios.post("/submit", body ).then(res => {
        this.props.handleToggleLogin(body.username)
        console.log(res);
        this.props.history.history.push('/questionType')
      }).catch(err => {
        console.log(err);
      })
    }

  handleConfirmationSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });
  }
  
  renderForm() {
    return (
      <form onSubmit={this.handleSubmit} >
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

      <div className ="container-signup" style={{fontFamily:'Arial',marginTop:'70px',backgroundImage: "linear-gradient(to top, #f1f1f1, #e9edf1, #ddeaef, #d1e7e8, #cae4db)"}}>

        <div className="Signup">
        <h1 className="newAccount">Create New Account!</h1>
            {/* {this.state.newUser === null
              ? this.renderForm()
              : this.renderConfirmationForm()} */}
              {this.renderForm()}
        </div>
      </div>
    );
  }
}