import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { signupUser } from "../features/authentication/authSlice";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const Signup = () => {
  const dispatch = useDispatch();

  

  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(signupUser(JSON.stringify(values)));
    },
  });

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Sign Up</h1>

      <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          className="border p-3 rounded-lg focus:outline-none"
          value={formik.values.name}
          onChange={formik.handleChange("name")}
          onBlur={formik.handleBlur("name")}
        />
        <input
          type="text"
          placeholder="Username"
          className="border p-3 rounded-lg focus:outline-none"
          value={formik.values.username}
          onChange={formik.handleChange("username")}
          onBlur={formik.handleBlur("username")}
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg focus:outline-none"
          value={formik.values.email}
          onChange={formik.handleChange("email")}
          onBlur={formik.handleBlur("email")}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg focus:outline-none"
          value={formik.values.password}
          onChange={formik.handleChange("password")}
          onBlur={formik.handleBlur("password")}
        />
        <button
          className="text-white bg-slate-700 py-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-40"
          type="submit"
        >
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
