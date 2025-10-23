import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import chatbotRoutes from "./routes/chatbot.route.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000", // your Next.js frontend
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));

// Database connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((error) => console.error("❌ Could not connect to MongoDB...", error));

// Test route
app.get("/", (req, res) => {
  res.send("Chatbot API is running 🚀");
});

// Define chatbot routes
app.use("/bot/v1", chatbotRoutes);

app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
