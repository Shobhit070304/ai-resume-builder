const express = require("express");
const router = express.Router();
const genAI = require("../controllers/ai-controller");

// Text Summarization
router.post("/summarize", async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ message: "Text is required" });

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(`Summarize this: ${text}`);
    const summary = result.response.candidates[0].content.parts[0].text;

    res.json({ summary });
  } catch (error) {
    console.error("Error summarizing text:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Chatbot
router.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;
    if (!message)
      return res.status(400).json({ message: "Message is required" });

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(`User: ${message}\nAI:`);
    const reply = result.response.candidates[0].content.parts[0].text;

    res.json({ reply });
  } catch (error) {
    console.error("Error in chatbot:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
