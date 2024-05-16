import { useContext } from "react";
import { AuthContext } from "../context/types/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import { HeroesApp } from "../HeroesApp";

export const PrivateRoute = () => {
  const { logged } = useContext(AuthContext);
  const { pathname, search } = useLocation();
  localStorage.setItem('lastPath', `${pathname}${search}`);

  return (logged) 
    ? (<HeroesApp />) 
    : ( <Navigate to={'/login'} />); 
};