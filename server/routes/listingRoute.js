import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import {
  deleteItem,
  getItemsByUser,
  getItemsOnQuery,
  getSingleItem,
  listOneItem,
} from "../controllers/ListingController.js";

const router = express.Router();

router.post("/", authMiddleware, listOneItem);
router.get("/", getItemsOnQuery);
router.get("/my-listings", authMiddleware, getItemsByUser);
router.get("/:id", getSingleItem);
router.delete("/:id", authMiddleware, deleteItem);

export default router;