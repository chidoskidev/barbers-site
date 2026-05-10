import express from "express";

//Internal Imports
import adminRoutes from "./routes/adminRoutes.js";
import servicesRoutes from "./routes/servicesRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";
import { connectDB } from "./config/db.js";

//VARIABLES
const app = express();
const PORT = process.env.PORT || 5000;

//MIDDLEWARE
app.use(express.json());
app.use("/admin", adminRoutes);
app.use("/service", servicesRoutes);
app.use("/gallery", galleryRoutes);

//PORT
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
