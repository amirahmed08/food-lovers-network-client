import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router'

const Authentication = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main className='bg-[#FFF7D6] min-h-screen'>
        <Outlet></Outlet>
      </main>
    </div>
  )
}

export default Authentication