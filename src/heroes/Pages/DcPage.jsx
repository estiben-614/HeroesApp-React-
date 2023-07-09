import React from 'react'
import { HeroList } from '../Components/HeroList'

export const DcPage = () => {
  const publisher='DC Comics'

  return (
    <>
      <h1>Dc Page</h1>
      <hr />

      <HeroList publisher={publisher}></HeroList>


    </>

  )
}
