import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Main from "./pages/Main";
import ProtectedRoute from "./context/ProtectedRoute";
import Summarization from "./pages/Summarization";
import Chatbot from "./pages/Chatbot";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            {" "}
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/summarize"
        element={
          <ProtectedRoute>
            {" "}
            <Summarization />
          </ProtectedRoute>
        }
      />
      <Route
        path="/chat-bot"
        element={
          <ProtectedRoute>
            {" "}
            <Chatbot />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
