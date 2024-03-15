import asyncHandler from "express-async-handler";

export const demoRoute = asyncHandler(async (req, res) => {
  try {
    res.status(200).json({
      message: "Hello World",
    });
  } catch (err) {
    throw new Error(err);
  }
});
