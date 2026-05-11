import express from "express";
import { updateAdmin, loginAdmin } from "../controllers/adminController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", loginAdmin);
// router.post("/", createAdmin);
router.put("/:id", verifyToken, updateAdmin);
// router.delete("/:id", deleteAdmin);

export default router;
