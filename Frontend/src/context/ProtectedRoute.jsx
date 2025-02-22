import React, { useContext } from "react";
import { UserDataContext } from "./UserContext";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { user, loading } = useContext(UserDataContext);

  if (loading) return <p>Loading...</p>;
  return user ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
