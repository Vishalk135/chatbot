import MessageModel from "../models/message.model.js";

export const Message = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text?.trim()) {
      return res.status(400).json({ error: "Message cannot be empty" });
    }

    // Save user message
    const userMessage = await MessageModel.create({ sender: "user", text });

    // Dummy bot responses
    const botResponses = {
      "hello": [
        "Hello there! 👋",
        "Hi! How can I help you today?",
        "Hey! Hope you're having a good day 🌸"
      ],
      "hi": [
        "Hey! 🙌",
        "Hi there 👋",
        "What's up? 😎"
      ],
      "who are you": [
        "I am a friendly bot 🤖 created to chat with you.",
        "Just a chatbot, but trying to be your friend 😊",
        "I'm your virtual assistant 🤖."
      ],
      "how are you": [
        "I'm doing great, thanks for asking! How about you?",
        "Feeling awesome 🚀",
        "I'm good, just a bunch of code running happily 😅"
      ],
      "what is your name": [
        "My name is ChatBot 1.0 🤖",
        "I'm called Botty 🦾",
        "You can just call me your AI buddy 🤖"
      ],
      "good morning": [
        "Good morning ☀️, have a productive day!",
        "Morning 🌸, don't forget to smile today!",
        "Rise and shine ☕"
      ],
      "good night": [
        "Good night 🌙, sweet dreams!",
        "Sleep well 😴",
        "Rest well, tomorrow's a new day 🌟"
      ],
      "bye": [
        "Goodbye! 👋",
        "See you later!",
        "Take care, come back soon 😊"
      ],
      "thanks": [
        "You're welcome! 🙌",
        "No problem at all 🤗",
        "Anytime! 😎"
      ],
      "help": [
        "You can ask me things like 'who are you', 'hello', 'bye', etc.",
        "I can answer simple questions like greetings and basic info.",
        "Try saying 'hello', 'good morning', or 'who are you'."
      ]
    };

    // Normalize user input
    const normalizeText = text.toLowerCase().trim();

    // Pick response or fallback
    const replies = botResponses[normalizeText] || [
      "I’m not sure how to respond to that. Can you ask something else? 🤔"
    ];
    const botReply = replies[Math.floor(Math.random() * replies.length)];

    // Save bot reply
    const botMessage = await MessageModel.create({ sender: "bot", text: botReply });

    // Return both messages
    return res.status(200).json({
      userMessage: userMessage.text,
      botMessage: botMessage.text
    });
  } catch (error) {
    return res.status(500).json({
      error: "Internal Server Error",
      details: error.message
    });
  }
};
