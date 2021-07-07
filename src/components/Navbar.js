import React, { useState } from 'react';
import {Link} from 'react-router-dom'

const Navbar =() => {
   
    const [showLinks] = useState(false);
    
        return (
         
           <div className ="navbar">
               <div className ="leftSide">
                   <div className = "links" id = {showLinks ? "hidden" : ""}>
                   <a className = "nav_home" href="/home"> Home </a>
                   <Link to="/howitworks">
                   <a className = "nav_how" href="howitworks"> How It Works</a>
                   </Link>
                   <Link to="/cards">
                   <a className = "nav_cards" href="/cards"> Greeting Cards </a>
                   </Link>
                   <Link to="/calendar">
                   <a className = "nav_cal" href="/calendar"> Calendar</a>
                   </Link>
                   <Link to="/kismetbox">
                   <a className = "nav_box" href="kismetbox"> Kismet Box</a>
                   </Link>
                   <Link to="/aboutkismet">
                   <a className = "nav_about" href="aboutkismet"> About Kismet</a>
                   </Link>
                   <Link to="/login">
                   <a className = "nav_login" href="login"> Login</a>
                   </Link>
                   <Link to="/register">
                   <a className = "nav_register" href="register"> Register</a>
                   </Link>
                   </div>
            </div>
           </div>

        );

}

export default Navbar 

