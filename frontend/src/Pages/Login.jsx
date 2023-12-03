import React from 'react'
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="">
      <form className="w-max flex flex-col gap-2 m-auto my-48">
        <h1 className="text-3xl m-auto">Login</h1>
        <input className="w-96 py-3 mt-3" type="text" placeholder="Enter your Email" />
        <input className="py-3" type="text" placeholder="Enter your Password" />
        <button
          className="w-300px border py-3 bg-blue-700 text-white"
          type="submit"
        >
          Register
        </button>
        <p className="m-auto">New User ? <Link to='/register'><span>Register</span></Link></p>
      </form>
    </div>
  )
}

export default Login
