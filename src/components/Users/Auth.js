import React, {useState, useEffect} from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const Auth = () => {

const [user, setUser] = useState({});

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

return(
    <div>
    <LoginForm handleLogin={handleLogin}/>
    <SignUpForm handleLogin={handleLogin}/>
    <button onClick={handleAuthClick} className="ui button">Access Authorized Route</button>
</div>
);
}

export default Auth 






