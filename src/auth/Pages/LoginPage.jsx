import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/types/AuthContext';

export const LoginPage = () => {
  const navigation = useNavigate();

  const { login } = useContext(AuthContext);
  const onLogin = () => {

    login('Estiben Fernández Echeverri');
    navigation('/',{
      replace:true,
    });
  };
  return (

    
    <>
      <h1>Login</h1>
      <hr />

      <button className='btn btn-primary' onClick={onLogin}>Login</button>
    </>
  );
};
