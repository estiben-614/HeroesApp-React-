import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { heroes } from '../data/heroes';

export const HeroPage = () => {

  const navigate=useNavigate();
  //Recuperamos la query que viene en la URL. /hero/spiderman -> Obtenemos spiderman
  const {id}=useParams();
  //Buscamos a un heroe con ese ID. Si existe, devuelve la info del heroe, si no, devuelve undefined
  const heroe=heroes.find(h=> (h.id==id));

  // Si es undefined
  if(!heroe){
      return <Navigate to={'/marvel'}/>;
  }
  
  //Url de la imagen
  const urlImg=`/assets/heroes/${id}.jpg`;

  //Función para el boton back
  const onReturn=()=>{
     
     navigate(-1);
  };
  return (
      <>
          <h1>HeroPage</h1>
          <div className='row animate__animated animate__fadeInLeft' >
              <div className='col-4'>
                  <img src={urlImg} alt=""  className='img-thumbnail '/>
              </div>
              <div className="col-8">
                  <ul className="list-group list-group-flush">
                      <li className="list-group-item"><b>Alter ego : </b> {heroe.alter_ego}</li>
                      <li className="list-group-item"><b>Publisher : </b> {heroe.publisher}</li>
                      <li className="list-group-item"><b>First appearance : </b> {heroe.first_appearance}</li>
          
                  </ul>
                  <h5>Characters : </h5>
                  <p>{heroe.characters}</p>
                  <button className='btn btn-outline-primary' onClick={onReturn}>Back</button>
              </div>
          </div>
      </>
  );
};
