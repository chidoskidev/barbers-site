import express from "express";
import {
  getImages,
  uploadImage,
  deleteImage,
} from "../controllers/galleryController.js";
import { verifyToken, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getImages);
router.post("/", verifyToken, isAdmin, uploadImage);
router.delete("/:id", verifyToken, isAdmin, deleteImage);

export default router;
