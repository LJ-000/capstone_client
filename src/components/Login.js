import React from 'react'

const Login = () => {
    let logIn= (e) => {
        e.preventDefault()

        fetch("http://localhost:3000/api/v1/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: e.target[0].value,
                password: e.target[1].value 
            })
            })
            .then(res => res.json()
            .then(userInfo => {
                localStorage.token = userInfo.token 
            }))
        }

return(
    <div>
        <h2>Welcome back - Login</h2>
        <form onSubmit={(e) => logIn(e) }>
        <label>Username</label>
        <input name="username" type="text"/>
        <label>Password</label>
        <input name="password" type="password"/>
        <input type="submit"/>
        </form>
    </div>
)}

export default Login

