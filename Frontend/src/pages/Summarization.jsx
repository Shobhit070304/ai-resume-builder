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
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">AI Text Summarization</h2>

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
  );
};

export default Summarization;
