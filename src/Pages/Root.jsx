import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer/Footer'

const Root = () => {
  return (
    <div className='min-h-screen'>
        <Navbar></Navbar>
        <div className='bg-[#fff9e2]'>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Root