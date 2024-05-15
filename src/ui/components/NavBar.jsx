import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/types/AuthContext';


export const Navbar = () => {
  const navigate = useNavigate();
  const { user, loggout } = useContext(AuthContext);
  const onLoggout = () => {
    loggout();
    //Redirige a esa ruta y replace:True evita que al devolverse, llegue a la pagina anterior 
    navigate('/login',{
      replace:true,
    });
  };
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
      <Link 
        className="navbar-brand" 
        to="/"
      >
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">

          <NavLink 
            className={({ isActive }) => `nav-link ${(isActive) ? 'active' : ''}`} 
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink 
            className={({ isActive }) => `nav-link ${(isActive) ? 'active' : ''}`} 
            to="/dc"
          >
            DC
          </NavLink>
          <NavLink 
            className={({ isActive }) => `nav-link ${(isActive) ? 'active' : ''}`} 
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
                    
          <span className='nav-item nav-link text-primary'>
            {user?.name || ''}
          </span>

          <button onClick={onLoggout} className='nav-item nav-link btn'>
            Loggout
          </button>
        </ul>
      </div>
    </nav>
  );
};