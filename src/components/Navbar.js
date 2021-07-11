import React from 'react';
import {Link} from 'react-router-dom'

const Navbar =() => {
    
        return (
         
           <div className ="navbar">
                   <a className = "nav_home" href="/home"> HOME  / </a>
                   <Link to="/howitworks">
                   <a className = "nav_how" href="howitworks"> HOW IT WORKS  / </a>
                   </Link>
                   
                   <Link to="/cards">
                   <a className = "nav_cards" href="/cards"> GREETING CARDS  / </a>
                   </Link>
                   <Link to="/calendar">
                   <a className = "nav_cal" href="/calendar"> MY EVENTS  / </a>
                   </Link>
                
                   <Link to="/kismetbox">
                   <a className = "nav_box" href="kismetbox"> KISMET BOX  / </a>
                   </Link>
                   
                   <Link to="/aboutkismet">
                   <a className = "nav_about" href="aboutkismet"> ABOUT KISMET  </a>
                   </Link>
                   
                   <Link to="/login">
                   <a className = "nav_login" href="login"> LOGIN / </a>
                   </Link>
                   
                   <Link to="/register">
                   <a className = "nav_register" href="register"> REGISTER </a>
                   </Link>
            </div>

        );

}

export default Navbar 

