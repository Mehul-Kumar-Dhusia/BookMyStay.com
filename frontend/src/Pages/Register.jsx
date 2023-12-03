import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="">
      <form className="w-max flex flex-col gap-2 m-auto my-48">
        <h1 className="text-3xl m-auto">Register</h1>
        <input
          className="w-96 py-3 mt-3"
          type="text"
          placeholder="Enter your Name"
        />
        <input className="py-3" type="text" placeholder="Enter your Email" />
        <input className="py-3" type="text" placeholder="Enter your Password" />
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
