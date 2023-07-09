import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { HeroesApp } from './HeroesApp.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/AppRouter'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router}></RouterProvider>
    
  </React.StrictMode>,
)
