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
    <div className="w-screen h-screen flex justify-center items-center bg-zinc-900 text-white">
      <div className="w-1/2 mx-auto p-6 bg-zinc-800 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-10 text-center">AI Chatbot</h2>

        <div className="mb-4 p-3 bg-zinc-700 border rounded-md min-h-80 overflow-y-auto">
          {chat.map((c, i) => (
            <div key={i} className="mb-2">
              <div className="w-full flex justify-end items-center p-2">
                <span className="bg-zinc-500 tracking-tighter my-4 text-white px-4 py-2 rounded-xl">
                  {c.user}
                </span>
                {/* <div className="w-10 rounded-full object-center object-cover"> */}
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBlsaFIQA3mlsLtmYV4Cn8ldhwA0xh4_QJmw&s"
                  alt=""
                  className="w-15 rounded-full object-center object-cover"
                />
                {/* </div> */}
              </div>

              <div className="w-full flex justify-start items-center p-2 ">
                {/* <div className="w-10 rounded-full object-cover object-center"> */}
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCvsvGhN0PQiTi3-SA0B-zPPgweLg4XjaHAQ&s"
                  alt=""
                  className="w-10 rounded-full object-center object-cover"
                />
                {/* </div> */}
                <span className=" bg-zinc-600  tracking-tighter text-white p-2 rounded-xl">
                  {c.ai}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full flex gap-3 items-center">
          <input
            type="text"
            className="w-full py-3 border rounded-full px-8"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={loading}
          />

          <div className="flex justify-center cursor-pointer items-center gap-2 rounded-full px-4 py-3 bg-green-500 hover:bg-green-600">
            <button
              onClick={handleSend}
              className=" text-white text-lg cursor-pointer rounded-md  disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Thinking..." : "Send"}
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </div>
        </div>

        {error && <p className="text-red-500 mt-3">{error}</p>}
      </div>
    </div>
  );
};

export default Chatbot;
