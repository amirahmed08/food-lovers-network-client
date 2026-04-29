import React from 'react'
import errorImg from '../assets/error-404.png'
import { NavLink } from 'react-router'


const Error = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-8 p-8'>
      <div className='flex justify-center'>
        <img src={errorImg} alt="Error 404" className='max-w-md max-h-64 object-contain' />
      </div>
      
      <div className='text-center space-y-4'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-800'>Oops! Page Not Found</h2>
        <p className='text-lg text-gray-600 max-w-md mx-auto'>
          The page you are looking for is not available.
        </p>
       <NavLink to='/'><button className="btn btn-primary px-8 py-3 text-lg">Go Home</button></NavLink>
      </div>
    </div>
  )
}

export default Error