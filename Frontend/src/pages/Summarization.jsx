import React, { useState } from "react";
import axios from "axios";

const Summarization = () => {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSummarize = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/ai/summarize`,
        { text }
      );
      setSummary(response.data.summary);
    } catch (error) {
      setError("Failed to summarize text. Please try again.");
      console.error("Error : ", error);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="w-screen h-screen flex gap-5 justify-center items-center bg-zinc-900 text-white p-5">
        <div className="bg-zinc-800 h-full w-1/5 rounded-xl">
          <h3 className="text-center text-2xl font-semibold p-5">Chats</h3>
          <div className="p-4 flex flex-col gap-2 mt-4">
            <div className="bg-zinc-700 text-gray-400 hover:text-gray-200 hover:bg-zinc-600 cursor-pointer px-4 py-2 rounded-xl">
              Give me a tree para
            </div>
            <div className="w-full h-[1px] bg-zinc-700"></div>
            <div className="bg-zinc-700 text-gray-400 hover:text-gray-200 hover:bg-zinc-600 cursor-pointer px-4 py-2 rounded-xl">
              Give me a tree para
            </div>
            <div className="w-full h-[1px] bg-zinc-700"></div>
            <div className="bg-zinc-700 text-gray-400 hover:text-gray-200 hover:bg-zinc-600 cursor-pointer px-4 py-2 rounded-xl">
              Give me a tree para
            </div>
          </div>
        </div>
        <div className="max-w-2xl w-2/3 mx-auto p-6 bg-zinc-300 text-black rounded-lg shadow-md">
          <h2 className="text-3xl text-zinc-600 text-center m-auto font-semibold mb-4">
            AI Text Summarization
          </h2>
          <div>
            <textarea
              className="w-full p-3 border rounded-md"
              rows="5"
              placeholder="Enter text to summarize..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            <button
              onClick={handleSummarize}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              disabled={loading}
            >
              {loading ? "Summarizing..." : "Summarize"}
            </button>

            {error && <p className="text-red-500 mt-3">{error}</p>}

            {summary && (
              <div className="mt-4 p-3 bg-white border rounded-md">
                <h3 className="font-semibold">Summary:</h3>
                <p>{summary}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Summarization;
