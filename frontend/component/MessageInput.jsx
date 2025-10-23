"use client";
import { useState } from "react";
import axios from "axios";

export default function MessageInput({ addMessage }) {
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message
    addMessage({ sender: "user", text: input });

    try {
      const res = await axios.post("http://localhost:5000/bot/v1/message", {
        
        text: input,
      });

      // Add bot reply
      addMessage({ sender: "bot", text: res.data.reply || "No reply" });
    } catch (err) {
      addMessage({ sender: "bot", text: "⚠️ Error connecting to server." });
    }

    setInput("");
  };

  return (
    <div className="p-3 border-t flex">
      <input
        type="text"
        className="flex-1 p-2 border rounded-lg focus:outline-none"
        placeholder="Type a message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
      />
      <button
        onClick={sendMessage}
        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Send
      </button>
    </div>
  );
}
