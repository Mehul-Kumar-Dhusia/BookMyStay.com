import React, { useContext, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../Context/AuthContext';
import axios from 'axios';
const Login = () => {
  const navigate = useNavigate()
  const {setCurrentUser} = useContext(AuthContext)
  const [email , setEmail] = useState("") ;
  const [password , setPassword] = useState("") ;

  const formSubmitHandler = async (e) => {
    e.preventDefault() ;
    const response = await axios.post('auth/login' , {
      email : email ,
      password : password
    })
    setCurrentUser(response.data)
    navigate('/')
  }
  return (
    <div className="">
      <form method='POST' onSubmit={formSubmitHandler} className="w-max flex flex-col gap-2 m-auto my-48">
        <h1 className="text-3xl m-auto">Login</h1>
        <input onChange={(e) => {setEmail(e.target.value)}} className="py-3" type="text" placeholder="Enter your Email" />
        <input onChange={(e) => {setPassword(e.target.value)}} className="py-3" type="text" placeholder="Enter your Password" />
        <button
          className="w-300px border py-3 bg-blue-700 text-white"
          type="submit"
        >
          Login
        </button>
        <p className="m-auto">New User ? <Link to='/register'><span>Register</span></Link></p>
      </form>
    </div>
  )
}

export default Login
