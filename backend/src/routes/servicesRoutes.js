import express from "express";
import {
  getServices,
  addService,
  deleteService,
  updateService,
} from "../controllers/servicesController.js";
import { verifyToken, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getServices);
router.post("/", verifyToken, isAdmin, addService);
router.put("/:id", verifyToken, isAdmin, updateService);
router.delete("/:id", verifyToken, isAdmin, deleteService);

export default router;
