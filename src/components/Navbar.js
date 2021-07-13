import React from 'react';
import {Link} from 'react-router-dom'

const Navbar =() => {
    
        return (
         
           <div className ="navbar">
                   <a className = "nav_home" href="/home"> HOME   / </a>
                    
                   <Link className = "nav_how" to="/howitworks" href="howitworks"> 
                   HOW IT WORKS   / 
                   </Link>
                   
                   <Link to="/cards" className = "nav_cards" href="/cards">
                   GREETING CARDS   / 
                   </Link>

                   <Link to="/calendar" className = "nav_cal" href="/calendar"> 
                   MY EVENTS   / 
                   </Link>
                
                   <Link to="/kismetbox" className = "nav_box" href="kismetbox"> 
                   KISMET BOX   / 
                   </Link>
                   
                   <Link to="/aboutkismet" className = "nav_about" href="aboutkismet"> 
                   ABOUT KISMET  
                   </Link>
                   
                   <Link to="/login" className = "nav_login" href="login"> 
                   LOGIN   / 
                   </Link>
                   
                   <Link to="/register" className = "nav_register" href="register"> 
                   REGISTER 
                   </Link>
            </div>

        );

}

export default Navbar 

