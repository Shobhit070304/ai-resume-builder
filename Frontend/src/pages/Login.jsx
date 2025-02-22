import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const user = {
        email,
        password,
      };

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/user/login`,
        user
      );
      console.log("Hello")

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        navigate("/home");
      } else {
        alert("Login failed. Please try again.");
      }

      setEmail("");
      setPassword("");
    } catch (error) {
      console.error(error);
      alert("An error occurred while registering. Please try again.");
    }
    setEmail("");
    setPassword("");
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-zinc-900">
      <div className="px-5 w-1/4 py-10 rounded-lg border-2 border-gray-500 bg-zinc-800  text-white">
        <h1 className="text-4xl text-white font-bold text-center text-white">
          Login
        </h1>
        <form onSubmit={(e) => handleLogin(e)}>
          <h3 className="text-lg text-gray-400 ">Email</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full py-2 px-4 border-2 border-gray-400  rounded-md placeholder:text-gray-400 my-2 "
            placeholder="Enter your email"
          />
          <h3 className="text-lg text-gray-400 mt-4">Password</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full py-2 px-4 border-2 border-gray-400  rounded-md placeholder:text-gray-400 my-2 "
            placeholder="Enter your password"
          />
          <button className="w-full text-white font-semibold py-2 rounded-lg mt-4 bg-blue-500">
            Login
          </button>
          <p className="w-full text-gray-300 text-center mt-2">
            Don't have an account{" "}
            <Link to={"/signup"} className="text-blue-400">
              SignUp
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
