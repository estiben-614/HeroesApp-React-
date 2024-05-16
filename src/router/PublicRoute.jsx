import { useContext } from "react";
import { AuthContext } from "../context/types/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export const PublicRoute = () => {
  const { logged } = useContext(AuthContext);
  return (
    logged
      ? (
        <Navigate to ="/marvel"/>
      )
      : (
        <Outlet />
      )
  );
};