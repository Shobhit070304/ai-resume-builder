import React, { useEffect, useState } from "react";
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import Editor from "react-simple-code-editor";
import axios from "axios";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import Loading from "../components/Loading";

function CodeReviewer() {
  const [code, setCode] = useState(`function sum(){ 
    return 1 + 1;
}`);
  const [loading, setLoading] = useState(false);
  const [review, setReview] = useState();

  useEffect(() => {
    prism.highlightAll();
  });

  async function reviewCode() {
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/ai/get-review`,
        {
          code,
        }
      );
      setReview(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <div className="h-screen w-screen">
        <div className="text-4xl h-[10%] font-semibold text-center bg-zinc-900 text-white pt-6">
          Write down your code and get immidiate results!
        </div>
        <div className="w-full h-[90%] flex flex-wrap md:flex-nowrap gap-5 p-5 bg-zinc-900">
          <div className="left w-full md:w-1/2 bg-zinc-800 text-white rounded-md p-4 relative">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
              }
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                color: "#D8D8D8",
                borderRadius: "10px",
              }}
              className="rounded-md"
            />

            <div
              onClick={reviewCode}
              className="bg-gray-300 text-black rounded-2xl py-2 px-8 text-center font-semibold cursor-pointer absolute bottom-5 right-5 hover:bg-gray-500"
            >
              Submit
            </div>
          </div>

          <div className="right w-full md:w-1/2 bg-zinc-700 text-white rounded-md p-4 overflow-auto">
            {loading ? (
              <Loading />
            ) : (
              <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CodeReviewer;
