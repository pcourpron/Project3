import React from 'react';
import { Link } from 'react-router-dom'
import "./Landingpage.css";


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