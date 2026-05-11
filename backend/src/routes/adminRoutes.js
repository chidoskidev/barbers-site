import express from "express";
import { updateMyAdminProfile, loginAdmin } from "../controllers/adminController.js";
import { isAdmin, verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", loginAdmin);
router.put("/profile", verifyToken, isAdmin, updateMyAdminProfile);

export default router;
