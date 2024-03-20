import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/User.js";

export const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];

    try {
      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded?.id);
        console.log(user);

        req.user = user;

        // Continue to the next middleware or route handler
        next();
      }
    } catch (error) {
      return res
        .status(401)
        .json({ error: "Not Authorized, token expired. Please login again" });
    }
  } else {
    return res.status(401).json({ error: "No token attached to the header" });
  }
});