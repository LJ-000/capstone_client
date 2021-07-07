import React, { useState } from 'react';
import {Link} from 'react-router-dom'

const Navbar =() => {
   
    const [showLinks] = useState(false);
    
        return (
         
           <div className ="navbar">
               <div className ="leftSide">
                   <div className = "links" id = {showLinks ? "hidden" : ""}>
                   <a href="/home"> Home </a>
                   <Link to="/howitworks">
                   <a  href="howitworks"> How It Works</a>
                   </Link>
                   <Link to="/cards">
                   <a href="/cards"> Greeting Cards </a>
                   </Link>
                   <Link to="/calendar">
                   <a  href="/calendar"> Calendar</a>
                   </Link>
                   <Link to="/kismetbox">
                   <a  href="kismetbox"> Kismet Box</a>
                   </Link>
                   <Link to="/aboutkismet">
                   <a  href="aboutkismet"> About Kismet</a>
                   </Link>
                   <Link to="/login">
                   <a  href="login"> Login</a>
                   </Link>
                   <Link to="/register">
                   <a  href="register"> Register</a>
                   </Link>
                   </div>
            </div>
           </div>

        );

}

export default Navbar 

