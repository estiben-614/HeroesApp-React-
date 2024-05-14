import { heroes } from "../data/heroes";

export const getHeroByName = (name) => {
    
  const heroName = name.toLowerCase().trim();
  if(heroName.length <= 1) return [];

  //Filtremos los heroes con ese nombre
  return heroes.filter((heroe) => (heroe.superhero.toLowerCase().includes(heroName)));

};