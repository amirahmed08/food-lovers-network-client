import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router'
import { MdOutlineLogin } from "react-icons/md";
import { use } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { BiLogOut } from "react-icons/bi";


  const Navbar = () => {
    
    const {user, logOut} = use(AuthContext)

  const [showItems, setShowItems] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isHovering, setIsHovering] = useState(false)


  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        alert('Logout successful')
      })
      .catch((error) => {
        // An error happened.
        alert('Error signing out: ' + error.message);
       })
  }

  useEffect(() => {
    const handleScroll = () => {

      // always show at top
      if (window.scrollY < lastScrollY) {
        setShowItems(true)
      } 
      // scroll DOWN → hide
      else if (window.scrollY > lastScrollY) {
        setShowItems(false)
      } 
      // scroll UP → show
      else {
        setShowItems(true)
      }

      setLastScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  // final visibility logic
  const visible = showItems || isHovering

  const links =
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/all-review">All Review</NavLink></li>
      <li><NavLink to="/my-reviews">My Reviews</NavLink></li>
      <li><NavLink to="/add-reviews">Add Reviews</NavLink></li>
    </>

  return (
    <div>
      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-600 ease-in-out hover:shadow-lg hover:top-4
        ${visible 
          ? 'top-2 w-[95%] duration-500 bg-white/40 backdrop-blur-xl shadow-md' 
          : 'top-4 w-[60%] duration-500 max-w-7xl bg-white/20 backdrop-blur-lg shadow-sm'}
        hover:w-[95%] rounded-full px-2 md:px-6`}
      >

        <div className="navbar">

          {/* LEFT */}
          <div className="navbar-start">

            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                ☰
              </div>
              <ul className="navbar-small-device menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                {links}
              </ul>
            </div>

            {/* LOGO */}
            <NavLink to="/" className={` cursor-pointer font-bold text-[#FFC107] lobster-two-bold transition-all duration-500
              ${visible 
                ? 'text-3xl opacity-100 scale-100' 
                : 'opacity-0 scale-75 pointer-events-none'}
            `}>
              FoodNet
            </NavLink>

          </div>

          {/* CENTER */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-xl gap-5 cormorant-infant navbar-container">
              {links}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="navbar-end">

            <NavLink to="/auth/login" className={`cursor-pointer flex items-center gap-2 bg-[#FFC107] rounded-xl transition-all duration-300 hover:scale-90
              ${visible 
                ? 'px-2 md:px-4 py-2 text-lg md:text-xl opacity-100 scale-100 ' 
                : 'opacity-0 scale-75 pointer-events-none px-0 py-0'}
            `}>
              {user? 
              (
                <button onClick={handleLogOut} className="flex items-center gap-2 bg-[#FFC107] rounded-xl transition-all duration-300 hover:scale-90 px-2 md:px-4 py-2 text-lg md:text-xl">
                  <BiLogOut />
                  <span className="hidden md:inline">{visible && 'Logout'}</span>
                </button>
              )
                :
              (
              <>
               <MdOutlineLogin />
               <span className="hidden md:inline">{visible && 'Login'}</span>
              </>
              )
              }
            </NavLink>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar