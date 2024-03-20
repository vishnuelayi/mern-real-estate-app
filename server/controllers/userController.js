import asyncHandler from "express-async-handler";
import User from "../models/User.js";

//updating an existing user information
export const updateUser = asyncHandler(async (req, res) => {
  try {
    const { _id } = req.user;
    const { username, name } = req.body;
    const user = await User.findByIdAndUpdate(
      _id,
      {
        $set: {
          username: username,
          name: name,
        }
      },
      { new: true }
    );

    if (!user) {
      res.status(404);
      throw new Error("User not found");
    }

    res.json(user);
  } catch (error) {
    // Handle the error appropriately
    // For example, you can send an error response
    res.status(500).json({ message: error.message });
  }
});

export const updateProfileImage = asyncHandler(async (req, res) => {
  try {
    const { _id } = req.user;
    const { image } = req.body;
    const user = await User.findByIdAndUpdate(
      _id,
      {
        image: image,
      },
      { new: true }
    );

    if (!user) {
      res.status(404);
      throw new Error("User not found");
    }

    res.json(user);
  } catch (error) {
    // Handle the error appropriately
    // For example, you can send an error response
    res.status(500).json({ message: error.message });
  }
});
