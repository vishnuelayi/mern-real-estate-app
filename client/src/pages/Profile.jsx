import React, { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { MdEditSquare } from "react-icons/md";
import { useDispatch } from "react-redux";
import { updateUser } from "../features/user/userService";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
;

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  name: Yup.string().required("Name is required"),
});

const Profile = () => {
  const dispatch = useDispatch();

  const fileRef = useRef();
  const [file, setFile] = useState(undefined);
  const [filePercentage, setFilePercentage] = useState(0);
  const [fileURL, setFileURL] = useState(undefined);
  const [uploadError, setUploadError] = useState(false);

  const fileUR = "fahgaogjohgojgojgojg";

  const [formData, setFormData] = useState({})
 console.log(formData);

  
  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);


  //firebase image upload configuration
  const handleFileUpload = async (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    uploadBytesResumable(storageRef, file)
      .then((snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePercentage(progress);
        if (progress === 100) {
          getDownloadURL(storageRef).then((url) => {
            setFileURL(url);
          });
        }
      })
      .catch((error) => {
        setUploadError(true);
        console.log(error);
      });
  };



  const singnedInUser = JSON.parse(localStorage.getItem("user"));

  const formik = useFormik({
    initialValues: {
      username: singnedInUser?.username,
      email: singnedInUser?.email,
      name: singnedInUser?.name,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setFormData(JSON.stringify(values));
      // dispatch(updateUser(JSON.stringify(values)));
    },
  });

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="font-semibold text-3xl text-center my-7">Profile</h1>
      <form className="flex flex-col gap-3" onSubmit={formik.handleSubmit}>
        <input
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <img
          src={singnedInUser?.image}
          alt="profile image"
          className="rounded-full h-24 w-24 self-center object-cover cursor-pointer mt-2 mb-2"
          onClick={() => fileRef.current.click()}
        />

        <div className="relative">
          <input
            type="text"
            className="rounded-lg border p-3 w-full"
            placeholder="name"
            onChange={formik.handleChange("name")}
            onBlur={formik.handleBlur("name")}
            value={formik.values.name}
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            onClick={() => formik.setFieldValue("name", "")}
          >
            <MdEditSquare fontSize="22" />
          </button>
        </div>

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
            disabled
          />
        </div>

        <button
          className="text-white bg-slate-700 rounded-lg p-3 uppercase disabled:opacity-80 hover:opacity-95"
          type="submit"
        >
          Update
        </button>

        <button
          className="text-white bg-red-600 rounded-lg p-3 uppercase disabled:opacity-80 hover:opacity-95"
          type="button"
          onClick={handleLogout}
        >
          Logout
        </button>
      </form>
    </div>
  );
};

export default Profile;
