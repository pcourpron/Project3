import React from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css";


class Navbar extends React.Component {
  componentDidMount() {
  let mainNav = document.getElementById('js-menu');
  let navBarToggle = document.getElementById('js-navbar-toggle');

  navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
    });
  }
  
render() {
    return(
//         <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top" >
//     <Link to='/'> <div className="navbar-brand" href="#">Navbar</div></Link>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div className="collapse navbar-collapse" id="navbarNav">
//     <ul className="navbar-nav ml-auto">
//       <li className="nav-item active">
//        <Link to ='/'> <a className="nav-link">Home</a></Link>
//       </li>
//       <li className="nav-item">
//         <Link to='/Login'><a className="nav-link" >Login</a></Link>
//       </li>
      
//     </ul>
//   </div>
// </nav>
<nav class="navbar">
        <span class="navbar-toggle" id="js-navbar-toggle">
            <i class="fas fa-bars"></i>
        </span>
        <a href="#" class="logo"><img src="https://www.codeclub.org.uk/assets/code-club/dist/images/code-club-logo.svg"></img></a>
        {/* <a href="#" class="logo"><img src="http://www.researchandinnovation.ie/wp-content/uploads/2016/07/code-institute-450-680x365_c.png"></img></a> */}
        <ul class="main-nav" id="js-menu">
            <li>
                {/* <a href="#" class="nav-links">Home</a> */}
                <Link to ='/'> <a className = "nav-links">Home</a></Link>
            </li>
            <li>
                <Link to='/Login'><a className="nav-links" >Login</a></Link>
            </li>
            <li>
                <Link to='/signup'><a className="nav-links" >Create Account</a></Link>
            </li>
        </ul>
    </nav>
    );
  }
}
export default Navbar;
