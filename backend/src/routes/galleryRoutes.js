import express from "express";
import {
  getImages,
  uploadImage,
  deleteImage,
} from "../controllers/galleryController.js";

const router = express.Router();

router.get("/", getImages);
router.post("/", uploadImage);
router.delete("/:id", deleteImage);

export default router;
