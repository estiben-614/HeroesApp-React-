import { heroes } from "../data/heroes";

//Función para obtener un arreglo de heroes según su publisher
export const getHeroByPublisher = (publisher) => {
  const validPubliser = ['DC Comics', 'Marvel Comics'];

  if(!validPubliser.includes(publisher)){
    throw new Error (`${publisher} is not a valid publisher`);
  }

  //Filtremos según el publisher, obtiiendo así un nuevo array con los heroes de cada publisher 
  const heroesFiltrados = heroes.filter((heroe) => heroe.publisher === publisher);

  return heroesFiltrados;
};