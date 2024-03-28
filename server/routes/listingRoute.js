import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { deleteItem, getAllItems, getItemsByUser, getItemsOnQuery, getSingleItem, listOneItem } from "../controllers/ListingController.js";

const router = express.Router();


router.post("/add", authMiddleware,listOneItem);

router.get("/mylistings", authMiddleware,getItemsByUser)
router.delete("/delete/:id",authMiddleware,deleteItem)
router.get("/get",getItemsOnQuery)
router.get("/:id",getSingleItem)
router.get("/",getAllItems)




export default router;