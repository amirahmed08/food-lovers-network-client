import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer/footer'

const Root = () => {
  return (
    <div className='min-h-screen'>
        <Navbar></Navbar>
        <div className='bg-[#FFF7D6]'>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Root