import { useMemo } from "react";
import { getHeroByPublisher } from "../Helpers/getHeroByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  //Obtenemos un nuevo array con los heroes del publisher
  const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);

  return (
      <>
          <div className="row rows-cols-1 row-cols-md-3 g-3 ">
              {heroes.map((hero) => (
                  <ul key={hero.id}>
                      <HeroCard hero={hero}/>
                  </ul>
        ))}
          </div>
      </>
  );
};
