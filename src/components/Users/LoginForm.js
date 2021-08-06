import React, {useState} from 'react'

const LoginForm = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleUsernameChange = (evt) => {
        setUsername(evt.target.value)
    }

    const handlePasswordChange = (evt) => {
        setPassword(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        fetch(`http://localhost:3000/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        .then(resp => resp.json())
        .then(data => {
            localStorage.setItem("token", data.jwt)
            props.handleLogin(data.user)
        })
        setUsername("")
        setPassword("")
    }
    
    return(

<div className="login_page">
        <h2 className="login_header">Welcome Back</h2>
        <h2 className="login_subheader">send a card, make someone's day</h2>
         <br /> 
         <br /> 
           <form className="ui form" onSubmit={handleSubmit}>

         <p className="credentials"> 
         <label className="username">Username</label>
            <input className="username2" value={username} onChange={handleUsernameChange} type="text" placeholder="username"/>

         <br /> 
         <label className="password">Password</label>
            <input className="password2" value={password} onChange={handlePasswordChange} type="password" placeholder="password"/>
         <br /> 
         <br /> 
         <button className="login_button" type="submit">Submit</button>
         </p>
         </form>
     </div>
        
    )
} 


export default LoginForm


