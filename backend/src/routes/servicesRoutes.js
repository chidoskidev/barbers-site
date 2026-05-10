import express from "express";
import {
  getServices,
  addService,
  deleteService,
  updateService,
} from "../controllers/servicesController.js";

const router = express.Router();

router.get("/", getServices);
router.post("/", addService);
router.put("/:id", updateService);
router.delete("/:id", deleteService);

export default router;
