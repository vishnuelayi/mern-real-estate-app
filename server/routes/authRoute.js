import express from "express";
import { signupController} from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signupController);

export default router;
