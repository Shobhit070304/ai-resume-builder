import React, { useContext, useEffect, useState } from "react";
import { UserDataContext } from "../context/UserContext";
import { Link } from "react-router-dom";

function Navbar() {
  const [userPresent, setUserPresent] = useState(false);
  const { user, logout } = useContext(UserDataContext);

  useEffect(() => {
    if (user) {
      setUserPresent(user);
    }
  }, [user]);
  return (
    <>
      <nav className="flex px-26 py-4 justify-between items-center bg-black/20 backdrop-blur-md">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnB5mNUNlh1HpWbzXIHm2dwGPAxYlfopYqMA&s"
          alt=""
          className="w-15 object-center object-cover rounded-full"
        />
        <div className="space-x-6">
          <Link to={"/home"} className="hover:text-gray-300 hover:border-gray-100 hover:border-2 px-4 py-2 rounded-full">
            Home
          </Link>
          <Link to={"/summarize"} className="hover:text-gray-300 hover:border-gray-100 hover:border-2 px-4 py-2 rounded-full">
            Ai-Summarize
          </Link>
          <Link to={"/chat-bot"} className="hover:text-gray-300 hover:border-gray-100 hover:border-2 px-4 py-2 rounded-full">
            Ai-Chat-Bot
          </Link>
          <Link to={"/code-review"} className="hover:text-gray-300 hover:border-gray-100 hover:border-2 px-4 py-2 rounded-full">
            Ai-Code-review
          </Link>
        </div>
        <div className="flex justify-center items-center gap-2">
          {userPresent ? (
            <button onClick={logout} className="text-white px-4 py-2 cursor-pointer rounded-xl bg-red-500 hover:bg-red-400">
              Logout
            </button>
          ) : (
            <button className="text-white px-4 py-2 cursor-pointer rounded-xl bg-blue-500 hover:bg-blue-400">
              Login
            </button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
