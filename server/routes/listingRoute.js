import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { getItemsByUser, getSingleItem, listOneItem } from "../controllers/ListingController.js";

const router = express.Router();


router.post("/add", authMiddleware,listOneItem);
router.get("/mylistings", authMiddleware,getItemsByUser)
router.get("/:id",getSingleItem)




export default router;