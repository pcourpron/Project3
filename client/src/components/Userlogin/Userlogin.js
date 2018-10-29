import React, { Component } from "react";
import "./Userlogin.css";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
// import "./Login.css";


export default class Userlogin extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        email: "",
        password: ""
      };
    }
  
    validateForm() {
      return this.state.email.length > 0 && this.state.password.length > 0;
    }
  
    handleChange = event => {
      this.setState({
        [event.target.id]: event.target.value
      });
    }
  
    handleSubmit = event => {
      event.preventDefault();
    }
    render() {
        return( 
    <div className = "container-login">
            <div className="Login"><h5>User Login!</h5>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel><h2>Email</h2></ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={(event)=>{this.handleChange(event)}}
              id='email'
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel><h2>Password</h2></ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={(event)=>{this.handleChange(event)}}
              id="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            <h3>Login</h3>
          </Button>
        </form>
      </div>
      {/* <div> className = "back-home"> */}
                {/* <button type="button" class="btn btn-outline-light btn-lg">Login Here!</button> */}
                <div>
                <div className = "home-button">
                        
                        <a href="#" class="btn btn-dark btn-lg active" role="button" aria-pressed="true">Back Home!</a>
                    <div className = "hometext">
                        <div id = "htext">
                            <p>If you choose to go back to home page!</p>
            
                        </div>
                    </div>
                </div>
            </div>
    </div>
    );
  }
}
                {/* <div class="dropdown-menu">
                    <form class="px-4 py-3">
                        <div class="form-group">
                            <label for="exampleDropdownFormEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"></input>
                        </div>
                        <div class="form-group">
                            <label for="exampleDropdownFormPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password"></input>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="dropdownCheck"></input>
                            <label class="form-check-label" for="dropdownCheck">
                                Remember me
                            </label>
                        </div>
                            <button type="submit" class="btn btn-primary">Sign in</button>
                    </form> 
                    <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">New around here? Sign up</a>
                        <a class="dropdown-item" href="#">Forgot password?</a>
                </div> */}
                
            {/* </div>         */}
//         )
//     }
// }