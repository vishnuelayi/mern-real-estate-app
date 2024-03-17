import express from "express";
import { googleAuth, loginController, signupController} from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signupController);
router.post("/login", loginController);
router.post("/google", googleAuth)

export default router;
