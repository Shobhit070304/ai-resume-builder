import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";

const HomeScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 border-b-2 border-gray-200 to-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomeScreen;
