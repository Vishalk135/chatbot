import MessageBubble from "../component/MessageBubble";

export default function ChatWindow({ messages }) {
  return (
    <div className="flex-1 p-4 overflow-y-auto">
      {messages.map((msg, idx) => (
        <MessageBubble key={idx} sender={msg.sender} text={msg.text} />
      ))}
    </div>
  );
}
