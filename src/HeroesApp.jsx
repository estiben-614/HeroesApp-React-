import { Navigate, Outlet } from 'react-router-dom';
import { Navbar } from './ui/components/NavBar';

export const HeroesApp = () => (
  <>
    <Navbar/>

    <div className="container">
      <Outlet/>
    </div>

    <Navigate to={"/marvel"}/>
  </>
    
);
