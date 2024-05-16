import { useContext } from "react";
import { AuthContext } from "../context/types/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRouter = () => {
  const { logged } = useContext(AuthContext);
  return (
    logged
      ? (<Outlet />) 
      : ( <Navigate to={'/login'} />) 
  );
};