import React from "react";
import { FaRocket, FaUsers, FaShieldAlt } from "react-icons/fa";

function Features() {
  return (
    <section className="mt-20 px-6 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
        <FaRocket className="text-4xl mx-auto text-blue-500" />
        <h3 className="text-xl font-semibold mt-4">Fast & Reliable</h3>
        <p className="text-gray-400 mt-2">
          Lightning-fast performance with seamless integration.
        </p>
      </div>
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
        <FaUsers className="text-4xl mx-auto text-green-500" />
        <h3 className="text-xl font-semibold mt-4">User-Friendly</h3>
        <p className="text-gray-400 mt-2">
          Simple and intuitive UI for a smooth experience.
        </p>
      </div>
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
        <FaShieldAlt className="text-4xl mx-auto text-red-500" />
        <h3 className="text-xl font-semibold mt-4">Highly Secure</h3>
        <p className="text-gray-400 mt-2">
          End-to-end encryption for maximum data safety.
        </p>
      </div>
    </section>
  );
}

export default Features;
