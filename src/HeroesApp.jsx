import { Navigate, Outlet } from 'react-router-dom';
import { Navbar } from './ui/components/NavBar';

export const HeroesApp = () => {
  const lastPath = localStorage.getItem('lastPath');
  return (
    <>
      <Navbar/>

      <div className="container">
        <Outlet/>
      </div>

      <Navigate to={lastPath ? lastPath : "/marvel"}/>
    </>
    
  );};
