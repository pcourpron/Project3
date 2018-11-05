import React from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css";

const Navbar = (props)=>{

    return(
    <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top" style={{paddingLeft:'50px', paddingRight: '50px'}}>
    {<a href="#" class="logo"><img src="https://www.codeclub.org.uk/assets/code-club/dist/images/code-club-logo.svg" style={{ marginRight: '20px',
    marginBottom: '10px'}}></img></a>}
    {props.name !== ''? <Link to='/'> <div className="navbar-brand">Welcome {props.name}</div></Link> : null}
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
       <Link to ='/'> <a className="nav-link" style={{color: "#28a745"}} >Home</a></Link>
      </li>
      <li className="nav-item">
       {props.name !== ''? null:<Link to='/Login'><a className="nav-link" style={{color: "#28a745"}} >Login</a></Link>} 
      </li>
      <li className='nav-item'>{props.name !== ''? null:<Link to='/Signup'> <li><a className='nav-link'style={{color: "#28a745"}} >Signup</a>  </li></Link>}  </li>

      {props.admin === true? <li><Link to='/Login'><a className="nav-link"style={{color: "#28a745"}} >Admin</a></Link> </li>: null}
     

     {props.name !== ''?<li> <a className="nav-link" style={{color: "#28a745"}} onClick={props.logOut}>Sign Out</a></li>: null}
      

    </ul>
  </div>
</nav>

    )
}
export default Navbar;
