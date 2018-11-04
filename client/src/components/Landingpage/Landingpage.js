import React from 'react';
import { Link } from 'react-router-dom'
import "./Landingpage.css";

// const Landingpage = () =>{
    
//     return(
//         <div className = "container-landingpage">
//             <div className = "login">
//                 {/* <button type="button" class="btn btn-outline-light btn-lg">Login Here!</button> */}
//                 <div className = "login-button">
                        
//                         <a href="/Login" className="btn-btn-light btn-lg active" role="button" aria-pressed="true"><font color="black">Login Here!</font></a>
//                     <div className = "logintext">
//                         <div id = "ltext">
//                             <p> For creating new Account please press: </p>
//                             <a href="/signup" className="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Create Account</a>
//                             <p>Button!</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className = "welcome">
//                 <h4>Welcome!</h4>
//                 <h4>Learn and Practice Algorithms!</h4>
//                 <div className = "big-button">
//                     <button type="button" className = " btn-light btn-lg btn-block" id = "large-button">Let's Get Started!</button>
//                     <div className = "text">
//                         <div id = "p-text">
//                         <p> Hey, purpose of this application is to help you master algorithms, 
//                             and coding as well. There are two ways: First is to hit </p>
//                         </div>
//                     </div>

const LandingPage = () => {

    return (
        <div className="container-fluid" id='landing-page'>
            <div className='row justify-content-center' style={{ paddingTop: '120px' }} >
                <h1 style={{ color: 'white' }}> Welcome!</h1>
            </div>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <p id='landing-page-text'style={{ color: 'white', textAlign:"center" }} >This project was created to help us learn web development while
                         also giving people a chance to practice their own coding skills
                         on algoritms!
                     </p>
                </div>
            </div>

            <div className = 'row justify-content-center'>
            <Link to='/questionType'><button className='btn btn-secondary' style = {{marginTop:'80px'}}>Get Started</button></Link>
            </div>


        </div>

    )
}
export default LandingPage;