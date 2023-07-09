import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {
  const navigation=useNavigate()
  const onLogin=()=>{
    navigation('/',{
      replace:true
    })
  }
  return (

    
    <>
    <h1>Login</h1>
    <hr />

    <button className='btn btn-primary' onClick={onLogin}>Login</button>
    </>
  )
}
