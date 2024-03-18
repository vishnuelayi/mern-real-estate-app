import express from "express";
import { updateUser } from "../controllers/userController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/",authMiddleware ,updateUser);


export default router;