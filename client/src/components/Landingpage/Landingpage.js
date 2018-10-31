import React from 'react';
import {Link} from 'react-router-dom'
import "./Landingpage.css";
 

const LandingPage = () =>{
    
    return(
        <div className = "container-landingpage">
            <div className = "login">
                {/* <button type="button" class="btn btn-outline-light btn-lg">Login Here!</button> */}
                <div className = "login-button">
                        
                        <a href="#" className="btn btn-light btn-lg active" role="button" aria-pressed="true">Login Here!</a>
                    <div className = "logintext">
                        <div id = "ltext">
                            <p className = 'white'> For creating new Account please press: </p>
                            <a href="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Create Account</a>
                            <p className = 'white' >Button!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "welcome">
                <h1 class="welcome">Welcome!</h1>
                <h4 class ="subtitle">Learn and Practice Algorithms!</h4>
                <div className = "big-button">
                <Link to='/QuestionType'>
                    <button type="button" className = " btn-light btn-lg btn-block" id = "large-button">Let's Get Started!</button>
                    </Link>
                    <div className = "text">
                        <div id = "p-text">
                        <p class="purpose"> Hey, purpose of this application is to help you master algorithms, 
                            and coding as well. There are two ways: First is to hit </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LandingPage;