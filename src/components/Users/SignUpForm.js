import React, {useState} from 'react'

const SignUpForm = (props) => {
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
        fetch(`http://localhost:3000/users`, {
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
            <h1 className="login_header">Register New Profile</h1>
            <br /> 
            <br /> 
            <form className="credentials" onSubmit={handleSubmit}>

                <div className="field">
                    <label className="username">Username</label>
                    <input className="username2" value={username} onChange={handleUsernameChange} type="text" placeholder="username"/>
                </div>
                <br /> 
                <div className="field">
                    <label className="password">Password</label>
                    <input className="password2" value={password} onChange={handlePasswordChange} type="password" placeholder="password"/>
                </div>
                <br /> 
                <br /> 
                <button className="login_button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SignUpForm 