import React from 'react'
import { HeroList } from '../Components/HeroList'

export const MarvelPage = () => {
  
  const publisher='Marvel Comics'
  return (
    <>
      <h1>MarvelPage</h1>
      <hr />

      <HeroList publisher={publisher}></HeroList>
    </>

  )
}
