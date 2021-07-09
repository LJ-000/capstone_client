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
    <div>
        <h2>Register New Profile</h2>
        <form>
        {/* // onSubmit={(e) => signUp(e) }> */}
        <label>Username</label>
        <input name="username" type="text"/>
        <label>Password</label>
        <input name="password" type="password"/>
        <input type="submit"/>
        </form>
    </div>
)}

export default Register 

