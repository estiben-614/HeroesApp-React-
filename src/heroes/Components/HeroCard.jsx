import React from 'react'
import { Link } from 'react-router-dom'


export const HeroCard = ({hero}) => {
    
    const imgUrl=`assets/heroes/${hero.id}.jpg`
  return (
    <>
        <div className="card mb-3  row animate__animated animate__fadeInUp " >
            <div className="row g-0 ">
                <div className="col-md-4">
                    <img src={imgUrl} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{hero.superhero}</h5>
                        <p className="card-text">{hero.characters}</p>
                        {   
                            (hero.characters !== hero.alter_ego) && (<p className="card-text">{hero.alter_ego}</p>)
                        }
                        
                        <p className="card-text" ><small className="text-muted">{hero.first_appearance}</small></p>
                        
                        {/* Redirigimos al componente HeroPage */}
                        <Link to={`/hero/${hero.id}`}>
                            Mas...
                        </Link>
                    </div>
                </div>
            </div>
</div>
    </>
  )
}
