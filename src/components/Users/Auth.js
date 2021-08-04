import React, {useState, useEffect} from 'react';
import LoginForm from './LoginForm';
import Navbar from './Navbar';
import SignUpForm from './SignUpForm';

const Auth = () => {
    
const [user, setUser] = useState({});
const [form, setForm] = useState("")

  useEffect(() => {
      const token = localStorage.getItem("token")
      if(token){
          fetch(`http://localhost:3000/auto_login`, {
              headers: {
                  Authorization: `Bearer ${token}`
              }
          })
          .then(resp => resp.json())
          .then(data => {
              setUser(data)
          })
      }
  }, [])

  const handleLogin = (user) => {
    setUser(user)
  }

const handleFormSwitch = (input) => {
    setForm(input)
  }
  
  const handleAuthClick = () => {
      const token = localStorage.getItem("token")
      fetch(`http://localhost:3000/user_is_authed`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      .then(resp => resp.json())
      .then(data => console.log(data))
    }

  const renderForm = () => {
      switch(form){
        case "login":
          return <LoginForm handleLogin={handleLogin}/>
          break;
        default:
          return <SignUpForm handleLogin={handleLogin}/>
    }
  }

return(
    <div>
    <Navbar handleFormSwitch={handleFormSwitch}/>
    {
      renderForm()
    }
    <button onClick={handleAuthClick} className="ui button">Access Authorized Route</button>
</div>
);
}

export default Auth 






// import { useEffect, useState } from 'react';
// import Login from 'Login';
// import Register from 'Register'

// const subscription_url = "http://localhost:3000/api/v1/subscriptions";
// const [subscriptions, setSubscriptions] = useState([])

// const Auth = () => {
//     return (
//         useEffect(() => {
//             fetch(subscription_url, {
//             method: "GET",
//             headers: {
//                 Authorization: `Bearer ${localStorage.token}`
//                 }
//             })
//             .then(res => res.json())
//             .then(subscriptions => {
//                 setSubscriptions(subscriptions)}
// )
//     }, []
//         )
//     )}

//     export default Auth; 

