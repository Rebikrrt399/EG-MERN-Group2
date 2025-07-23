import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import cors from "cors";

dotenv.config();
const app = express();

// ✅ CORS setup to allow Vite (frontend) requests
app.use(cors({
  origin: "http://localhost:5173", // 👈 updated to match your frontend
  credentials: true
}));

// Middleware
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB error:", err.message));

// Routes
app.use("/api/auth", authRoutes);

// Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

