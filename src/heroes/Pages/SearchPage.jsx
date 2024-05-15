import { useForm } from '../../hooks/useForm';
import { useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { getHeroByName } from '../Helpers/getHeroByName';
import { HeroCard } from '../Components/HeroCard';


export const SearchPage = () => {

  const navigate = useNavigate();
  //Usamos el hook del useForm para el manejo del formulario
  const { buscador,onInputChange } = useForm({
    buscador:'', //Mismo nombre del input
  });

  
  const onSubmitSearch = (event) => {
    event.preventDefault();

    //Ponemos la Query en el URL
    navigate(`?q=${buscador}`);

  };
  //Obtenemos la query
  const parsed = queryString.parse(location.search);
  const { q = '' } = parsed;
  const heroName = q;

  //Busquemos un array  con los heroes con ese query
  const heroes = getHeroByName(heroName); 
  //Una vez obtenido el array, podemos usar el mismo <HeroCard> </HeroCard> para mostrarlos



  return (

    <>
      <h1>SearchPage</h1>
      <hr />

      <div className="row">

        <div className="col-4">
          <h2>Searching</h2>
          <hr />

          <form action="" onSubmit={onSubmitSearch}>
            <input
              className="form-control "
              type="text"
              name="buscador"
              id=""
              onChange={onInputChange}
              placeholder='Search a hero'
              value={buscador}
            />
            <button className='btn btn-primary mt-2'>Search</button>

          </form>
        </div>
        <div className="col-8">
          <h2>Results</h2>
          <hr />

          {/* Si la query está vacia, muestra el div. De lo contrario, 
                  si una vez se busca con la query no se encuentra info,
                   muestra el div 
          {
            (q=='') ? (<div className='alert alert-primary'>Search a Hero</div>)
              : (heroes.length==0) && (<div className='alert alert-danger mt-5'>No hero <b>{q}</b></div>)

          } */}
          
          

          {
            heroes.map((hero) => (
              <HeroCard key={hero.id} hero={hero}/>
            ))
          }
        </div>

      </div>
    </>
    
  );
};
