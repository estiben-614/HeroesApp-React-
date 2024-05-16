import { useContext } from "react";
import { AuthContext } from "../context/types/AuthContext";
import { Navigate } from "react-router-dom";
import { HeroesApp } from "../HeroesApp";

export const PrivateRoute = () => {
  const { logged } = useContext(AuthContext);
  return (logged) 
    ? (<HeroesApp />) 
    : ( <Navigate to={'/login'} />); 
};