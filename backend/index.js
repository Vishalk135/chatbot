import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import taskRoutes from "./routes/chatbot.route.js";

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: process.env.NODE_ENV === "production" ? process.env.FRONTEND_URL : "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
  credentials: true
}));

// Database connection with error handling
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ Could not connect to MongoDB...", error);
    // Continue running to allow debugging
  }
};
connectDB();

// Test route
app.get("/", (req, res) => {
  res.send("Chatbot API is running 🚀");
});

// Routes
app.use("/api/v1/chatbot", taskRoutes);

// Export for Vercel serverless
export default app;
module.exports = app; // For CommonJS compatibility