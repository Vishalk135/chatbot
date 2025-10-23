"use client";
import { useState } from "react";
import ChatWindow from "../component/ChatWindow";
import MessageInput from "../component/MessageInput";

export default function Home() {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages((prev) => [...prev, message]);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg flex flex-col">
        <ChatWindow messages={messages} />
        <MessageInput addMessage={addMessage} />
      </div>
    </div>
  );
}
