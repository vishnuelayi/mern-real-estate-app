import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/authentication/authSlice.js";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase.js";

const Login = () => {


  //for google login authentication
  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
    } catch (err) {
      console.log(err);
    }
  };
  

  const dispatch = useDispatch();

  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = JSON.stringify(form);
    dispatch(loginUser(formData));
  };

  const auth = useSelector((state) => state.auth.user);

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="font-semibold text-3xl text-center my-7">Login</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Email or Username"
          className="border p-3 rounded-lg focus:outline-none"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg focus:outline-none"
          id="password"
          onChange={handleChange}
        />
        <button
          type="submit"
          className=" text-white bg-slate-700 py-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-40"
          onClick={handleSubmit}
        >
          Login
        </button>
        <button
          className="text-white bg-red-600 py-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-40"
          type="button"
          onClick={handleGoogleLogin}
        >
          Login with google
        </button>
        ;
        <div>
          <p className=" text-center text-slate-500 mt-3">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-700 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
