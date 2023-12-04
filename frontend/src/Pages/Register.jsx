import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { AuthContext } from "../Context/AuthContext";

const Register = () => {
  const navigate = useNavigate()
  const {setCurrentUser} = useContext(AuthContext)
  const [name , setName] = useState("") ;
  const [email , setEmail] = useState("") ;
  const [password , setPassword] = useState("") ;

  const formSubmitHandler = async (e) => {
    e.preventDefault() ;
    const response = await axios.post('auth/register' , {
      username : name ,
      email : email ,
      password : password
    })
    setCurrentUser(response.data)
    navigate('/')
  }

  return (
    <div className="">
      <form onSubmit={formSubmitHandler} method="POST" className="w-max flex flex-col gap-2 m-auto my-48">
        <h1 className="text-3xl m-auto">Register</h1>
        <input
          className="w-96 py-3 mt-3"
          type="text"
          placeholder="Enter your Name"
          onChange={(e) => {setName(e.target.value)}}
        />
        <input onChange={(e) => {setEmail(e.target.value)}} className="py-3" type="text" placeholder="Enter your Email" />
        <input onChange={(e) => {setPassword(e.target.value)}} className="py-3" type="text" placeholder="Enter your Password" />
        <button
          className="w-300px border py-3 bg-blue-700 text-white"
          type="submit"
        >
          Register
        </button>
        <p className="m-auto">Already registerd ? <Link to='/login'>Login</Link></p>
      </form>
    </div>
  );
};

export default Register;
