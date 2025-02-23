import React, { createContext, useEffect, useState } from "react";

export const UserDataContext = createContext();

function UserContext({ children }) {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem("token");
    if (token) {
      setUser(true);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(false);
  };

  return (
    <UserDataContext.Provider value={{ user, loading, logout }}>
      {children}
    </UserDataContext.Provider>
  );
}

export default UserContext;
