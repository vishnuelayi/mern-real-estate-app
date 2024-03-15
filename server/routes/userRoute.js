import express from "express";
import {demoRoute} from "../controllers/userController.js";

const router = express.Router();

router.get("/", demoRoute
);

export default router;