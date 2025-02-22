import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSend = async () => {
    if (!message.trim()) return;

    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/ai/chat`,
        { message }
      );
      setChat([...chat, { user: message, ai: response.data.reply }]);
    } catch (error) {
      setError("Failed to get ai response, Try again.");
      console.error("Chatbot error : ", error);
    }
    setLoading(false);
    setMessage("");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">AI Chatbot</h2>

      <div className="mb-4 p-3 bg-white border rounded-md h-60 overflow-y-auto">
        {chat.map((c, i) => (
          <div key={i} className="mb-2">
            <p className="text-blue-600">
              <strong>You:</strong> {c.user}
            </p>
            <p className="text-green-600">
              <strong>AI:</strong> {c.ai}
            </p>
          </div>
        ))}
      </div>

      <input
        type="text"
        className="w-full p-3 border rounded-md"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={loading}
      />

      <button
        onClick={handleSend}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Thinking..." : "Send"}
      </button>

      {error && <p className="text-red-500 mt-3">{error}</p>}
    </div>
  );
};

export default Chatbot;
