const Register = () => {
    // let signUp = (e) => {
    //     e.preventDefault()

    //     fetch("http://localhost:3000/api/v1/users", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             username: e.target[0].value,
    //             password: e.target[1].value 
    //         })
    //         })
    //         .then(res => res.json()
    //         .then(console.log))
    //         // .then (data => {
    //         //     localStorage.setItem("token", data.jwt)
    //         //     propTypes.Register(data.user)
    //         // })
    //     }
    

return(
    <div className="login_page">
        <h2 className="login_header">Register New Profile</h2>
        <br /> 
        <br /> 
        <form className="credentials">
        {/* // onSubmit={(e) => signUp(e) }> */}
        <label className="username">Username</label>
        <input className="username2" name="username" type="text"/>
        <br /> 
        <label className="password">Password</label>
        <input className="password2" name="password" type="password"/>
        <br /> 
        <br /> 
        <input className="login_button" type="submit"/>
        </form>
    </div>
)}

export default Register 

