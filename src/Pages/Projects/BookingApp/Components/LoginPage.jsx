import { useState } from "react"

export default function LoginPage({setLoginStatus}){
    
    const [credentials, setCredentials] = useState([{
        username: null,
        password: null
    }])

    function login(user){
        if (user.username && user.password !== null){
            console.log("Signed in successfully")
            setLoginStatus(true)
        }
    }

    const handleSubmit = (e) =>{
        login(credentials)
    }

    const handleChange = (e) =>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return(
        <div className="loginPage">
            <h1>Welcome to Jason's Booking application</h1>
        <form onSubmit={handleSubmit} className="loginBar" >
            <input name="username" placeholder="Username" onChange={handleChange}></input>
            <input name="password" placeholder="Password" onChange={handleChange}></input>
            <button>Login</button>
        </form>
        </div>
    )
}