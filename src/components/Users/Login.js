import React from 'react'

const Login = () => {
    // let logIn= (e) => {
    //     e.preventDefault()

        // fetch("http://localhost:3000/api/v1/users/login", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         username: e.target[0].value,
        //         password: e.target[1].value 
        //     })
        //     })
        //     .then(res => res.json()
        //     .then(userInfo => {
        //         localStorage.token = userInfo.token 
        //     }))
        // }

return(
    <div className="login_page">
        <h2 className="login_header">Welcome Back</h2>
        <h2 className="login_subheader">send a card, make someone's day</h2>
        <p className="credentials"> 
        {/* // onSubmit={(e) => logIn(e) } Login> */}
        <label className="username">Username</label>
        <input className="username2" name="username" type="text"/>
        <label className="password">Password</label>
        <input className="password2" name="password" type="password"/>
        {/* <input type="submit"/> */}
        <button className="login_button" onClick={event =>  window.location.href='/calendar'}>Login</button>
        </p>
    </div>
)}

export default Login

