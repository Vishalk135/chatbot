import { text } from "express";
import mongoose from "mongoose";

const botSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
})
const Bot=mongoose.model('Bot', userSchema);
export default Bot;