import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";


export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if admin exists
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Wrong password",
      });
    }

    // Generate token
    const token = jwt.sign(
      {
        id: admin._id,
        role: admin.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      },
    );

    // Send response
    res.status(200).json({
      success: true,
      token,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      message: error.message,
    });
  }
};
export const updateMyAdminProfile = async (req, res) => {
  try {

    const adminId = req.user.id;

    // hash password if being updated
    if (req.body.password) {
      req.body.password = await bcrypt.hash(
        req.body.password,
        10
      );
    }

    const updatedAdmin = await Admin.findByIdAndUpdate(
      adminId,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    res.status(200).json({
      success: true,
      admin: updatedAdmin
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

