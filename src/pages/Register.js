import React,{useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

function Register() {

    const {registerUser} = useContext(AuthContext);

    const [credential,setCredentials] = useState({
        username : "",
        email : "",
        password: ""
    })
const handelInputChange = (event)=>{
    const {name,value} = event.target;

    setCredentials({...credential,[name]: value})
}

const handleSubmit= (event) =>{
    event.preventDefault();
    registerUser(credential);
}
  return (
      <div className="hello">
<div className="container">
  <div className="card p-3" >
    <h4 className="py-3">Login to your account</h4>
    <form className="px-3">

      <label htmlFor="username">Name</label>
      <input value ={credential.username} onChange={handelInputChange} required 
        name ="username" type="text" placeholder ="enter your username" id="username" />

      <label htmlFor="username">Email</label>
      <input type="text" name="email" required
      value={credential.email} onChange={handelInputChange} id="email" placeholder="enter your email" />

      <label htmlFor="password">Password</label>
      <input type="text" value ={credential.password} onChange={handelInputChange} required
        name="password" id="password" placeholder="enter your password" />
     
      <label className="container1 mt-3"><p className="texts">Remember me</p>
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>

      <button className = "button" onClick={handleSubmit} type="submit">Sign Up</button>
    </form>
    <div className="switch">Already have an account ?  <Link to="/Login">Login Now</Link>
  </div>
  </div>
  </div>
  </div>
  )
}

export default Register
