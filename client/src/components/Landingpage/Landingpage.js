import React from 'react';
import { Link } from 'react-router-dom'
import "./Landingpage.css";

const LandingPage = () => {

    return (
        <div className = "container-fluid">
            <div className ='row justify-content-center' >
                <div className = 'Welcome'> Welcome!</div>
            </div>
            <div className ='row justify-content-center'>
                <div className ='col'>
                    <p className ='landing-page-text'>Code Club is created to help you learn or improve your web development <br/>
                        skills while giving you a chance to practice your own coding abilities <br/>
                        on algoritms or learn theory with help of flash cards!
                    </p>
                </div>
            </div>

            <div className = 'row justify-content-center' id = "get-started">
            <Link to='/questionType'><button><p>Let's Get Started</p></button></Link>
            </div>


        </div>

    )
}
export default LandingPage;