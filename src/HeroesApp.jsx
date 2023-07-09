import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './ui/components/NavBar'

export const HeroesApp = () => {
  return (

    <>
        <Navbar></Navbar>

        <div className="container">
            <Outlet></Outlet>
        </div>
    </>
    
  )
}
