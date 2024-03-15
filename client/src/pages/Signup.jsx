import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => { 
    setIsLoading(true);
    e.preventDefault();
    alert(JSON.stringify(form));
  };

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Sign Up</h1>

      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          id="name"
          className="border p-3 rounded-lg focus:outline-none"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="border p-3 rounded-lg focus:outline-none"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="border p-3 rounded-lg focus:outline-none"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="border p-3 rounded-lg focus:outline-none"
          onChange={handleChange}
        />
        <button disabled={isLoading} className="text-white bg-slate-700 py-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-40" type="submit" onClick={handleSubmit}>
          Sign Up
        </button>
      </form>
      <div>
        <p className="text-center text-slate-500 mt-3">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-700 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
