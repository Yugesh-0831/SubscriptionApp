import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import "./Login.css"

function Login() {

    const {loginUser} = useContext(AuthContext);

    const [credential,setCredentials] = useState({
        username : "",
        password: ""
    })

const handelInputChange = (event)=>{
    const {name,value} = event.target;
    setCredentials({...credential,[name]: value})
}

const handleSubmit= (event) =>{
    event.preventDefault();
    loginUser(credential);
}


  return (
      <div className="hello">
    <div className="container">
    <div className="card">
      <h4 className="py-3">Login to your Account</h4>
      <form>
        <label htmlFor="username">Email</label>
        <input value ={credential.username} onChange={handelInputChange} required 
        name ="username" type="text" placeholder ="enter your username" id="username" />
        <label htmlFor="password">Password</label>
        <input type="text" value ={credential.password} onChange={handelInputChange} required
        name="password" id="password" placeholder="enter your password" />
       
        <label className="container1 mt-3"><p className="texts">Remember me</p>
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
  
        <button className="button" onClick={handleSubmit} type="submit">Login</button>
      </form>
      <div className="switch">New to MyApp ? <Link to="/">Create One</Link> 
    </div>
</div>
</div>
</div>
  )
}

export default Login
