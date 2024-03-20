import express from "express";
import { updateProfileImage, updateUser } from "../controllers/userController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/",authMiddleware ,updateUser);
router.post("/image",authMiddleware,updateProfileImage);


export default router;