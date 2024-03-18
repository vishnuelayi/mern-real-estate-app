import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { MdEditSquare } from "react-icons/md";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const Profile = () => {
  const singnedInUser = JSON.parse(localStorage.getItem("user"));

  const formik = useFormik({
    initialValues: {
      username: singnedInUser?.username,
      email: singnedInUser?.email,
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="font-semibold text-3xl text-center my-7">Profile</h1>
      <form className="flex flex-col gap-3" onSubmit={formik.handleSubmit}>
        <img
          src={singnedInUser?.image}
          alt="profile image"
          className="rounded-full h-24 w-24 self-center object-cover cursor-pointer mt-2"
        />

        <div className="relative">
          <input
            type="text"
            className="rounded-lg border p-3 w-full"
            placeholder="username"
            onChange={formik.handleChange("username")}
            onBlur={formik.handleBlur("username")}
            value={formik.values.username}
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            onClick={() => formik.setFieldValue("username", "")}
          >
            <MdEditSquare fontSize="22" />
          </button>
        </div>

        <div className="relative">
          <input
            type="text"
            className="rounded-lg border p-3 w-full"
            placeholder="email"
            onChange={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
            value={formik.values.email}
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            onClick={() => formik.setFieldValue("email", "")}
          >
            <MdEditSquare fontSize="22" />
          </button>
        </div>

        <div className="relative">
          <input
            type="text"
            className="rounded-lg border p-3 w-full"
            placeholder="password"
            onChange={formik.handleChange("password")}
            onBlur={formik.handleBlur("password")}
            value={formik.values.password}
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            onClick={() => formik.setFieldValue("password", "")}
          >
            <MdEditSquare fontSize="22" />
          </button>
        </div>
        <button
          className="text-white bg-slate-700 rounded-lg p-3 uppercase disabled:opacity-80 hover:opacity-95"
          type="submit"
        >
          Update
        </button>

        <button className="text-white bg-red-600 rounded-lg p-3 uppercase disabled:opacity-80 hover:opacity-95">
          Logout
        </button>
      </form>
    </div>
  );
};

export default Profile;
