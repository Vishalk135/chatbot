import express from "express";
import { Message } from "../controllers/chatbot.controller.js";

const router = express.Router();

// POST /api/v1/chatbot/message
router.post("/message", Message);

export default router;