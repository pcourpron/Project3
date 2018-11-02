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
  //state for creating new user
  // state = {
  //   email: "",
  //   username: "",
  //   password: "",
  //   passwordConf: ""
  // }
  
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
  //hew user submit
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!this.state.password === this.state.passwordConf){
  //     console.log("Passwords are not matching")
  //     return;
  //   }

  //   const body = {
  //     email: this.state.email,
  //     username: this.state.username,
  //     password: this.state.password,
  //     passwordConf: this.state.passwordConf
  //   }

  //   axios.post("/submit", body ).then(res => {
  //     console.log(res);
  //   }).catch(err => {
  //     console.log(err);
  //   })
  // }
  //existing user
  handleSubmitLogin = (e) => {
    console.log(this.state)
    e.preventDefault();
    const loginBody = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
    }
    axios.post("/login", loginBody).then(res => {
      console.log(res.data);
    }).catch(err => {
      console.log(err);
    });
  }
  


  // render() {
  //   if (this.props.loggedIn) {
  //     <Redirect to="/Profile" />
  //   }
  //   return (
    // <div className="Login">
    // <h1>User Authentication</h1>
    //   <div class="main">
    //     <div class="w3">
    //       <div class="signin-form profile">
    //       <h3>Login</h3>
    //         <div class="login-form">
    //         <form>
              // {/* <form action="/login" method="post"> */}
//                 <input onChange={(e) => this.handleChange("email", e)}
//                                 type="text" name="email" placeholder="E-mail" required=""></input>
//                 <input onChange={(e) => this.handleChange("username", e)}
//                                 type="text" name="username" placeholder="Username" required=""/>
//                 <input onChange={(e) => this.handleChange("password", e)}
//                                 type="password" name="password" placeholder="Password" required=""/>
//                 <div class="tp">
//                   <input onClick={e => this. handleSubmitLogin(e)}type="submit" value="LOGIN NOW"/>
// 						    </div>
//               </form>
//             </div>
//           </div>
// 		    </div>
//         <div class="agile">
//           <div class="signin-form profile">
//             <h3>Register</h3>
//             <div class="login-form">
//                 {/* <form action="http://localhost:3001/login" method="post"> */}
//                     <input onChange={(e) => this.handleChange("email", e)}
//                            type="text" name="email" placeholder="E-mail" required=""></input>
//                     <input onChange={(e) => this.handleChange("username", e)}type="text" name="username" placeholder="Username" required=""/>
//                     <input onChange={(e) => this.handleChange("password", e)}type="password" name="password" placeholder="Password" required=""/>
//                     <input onChange={(e) => this.handleChange("passwordConf", e)}type="password" name="passwordConf" placeholder="Confirm Password" required=""/>
//                     <input onClick={e => this.handleSubmit(e)}type="submit" value="REGISTER"/>
//                 {/* </form> */}
//             </div>
//             <p><a href="#"> By clicking register, I agree to your terms</a></p>
//           </div>
//         </div>
//         <div class="clear">
//         </div>	
// 	   	</div>
//     </div>
//      );
//    }
// }
//  {
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
                {/* <FormGroup controlId="username" bsSize="large">
                    <ControlLabel>Username</ControlLabel>
                    <FormControl
                      autoFocus
                      type="email"
                      value={this.state.username}
                      onChange={(event) => { this.handleChange(event) }}
                    />
                </FormGroup>   */}
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
