import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signupController = asyncHandler(async (req, res) => {
  const {
    username,
    name,
    email,
    password,
    phone,
    address,
    city,
    state,
    zip,
    country,
  } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  try {
    const user = await User.create({
      username,
      name,
      email,
      password: hashedPassword,
    });
    res.status(201).json(user);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
});

export const loginController = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  const isValidUser = await User.findOne({ email });
  console.log(isValidUser);
  if (!isValidUser) {
    res.status(401);
    throw new Error("Invalid Credentials");
  }
  const isPasswordCorrect = bcrypt.compareSync(password, isValidUser.password);
  if (!isPasswordCorrect) {
    res.status(401);
    throw new Error("Invalid Credentials");
  }
  const token = jwt.sign({ id: isValidUser._id }, process.env.JWT_SECRET);
  res
    .cookie("access_token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + 3 * 60 * 60 * 1000), // 3 hours in milliseconds
    })
    .status(200)
    .json(isValidUser);
});

export const googleAuth = asyncHandler(async (req, res) => {
  const { email, name } = req.body;

  const user = User.findOne({ email });
  if (user) {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res
      .cookie("access_token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 3 * 60 * 60 * 1000), // 3 hours in milliseconds
      })
      .status(200)
      .json(user);
  } else {
    const user = await User.create({
      name,
      email,
      password: "",
      username: name?.toLowerCase().replace(/\s/g, ""),
    });
    res.status(201).json(user);
  }
});
