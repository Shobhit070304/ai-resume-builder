import React from "react";

function Hero() {
  return (
    <section className="flex flex-col items-center text-center mt-20 px-6">
      <h1 className="text-5xl font-extrabold leading-tight max-w-2xl">
        Hey <span className="text-blue-500">Shobhit</span>, Build Your Perfect
        Resume in Minutes!
      </h1>
      <p className="text-lg text-gray-300 max-w-lg mt-4">
        Create a professional, job-winning resume effortlessly with our smart
        and easy-to-use resume builder
      </p>
      <button className="mt-6 bg-blue-600 cursor-pointer hover:bg-blue-700 px-6 py-3 text-lg rounded-full">
        Get Started 🚀
      </button>
    </section>
  );
}

export default Hero;
