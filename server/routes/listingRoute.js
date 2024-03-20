import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { listOneItem } from "../controllers/ListingController.js";

const router = express.Router();


router.post("/add", authMiddleware,listOneItem);


export default router;