import express from "express";
import { Message } from "../controllers/chatbot.controller.js";

const router = express.Router();

// POST /bot/v1/message
router.post("/message", Message);

export default router;
