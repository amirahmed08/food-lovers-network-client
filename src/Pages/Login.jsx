import React, { useContext, useState } from 'react'
import loginBg from '../assets/LoginBg.png'
import { AuthContext } from '../Provider/AuthProvider'
import { NavLink, useLocation, useNavigate } from 'react-router'
import { FaRegEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";
import { toast } from 'react-toastify';

const Login = () => {
  const {signIn, setUser, signInWithGoogle} = useContext(AuthContext)
  const [hide, setHide] = useState(true)
  const location = useLocation()
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    signIn(email, password)
    .then(result =>{
      const user = result.user
      toast.success('You logged in successfully!!')
      setUser(user)
     navigate(location.state? location.state: '/')
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    toast.error('User not found!! Please register first')
  });

  }

  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then(result => {
      const user = result.user
      setUser(user)
      toast.success('You logged in successfully!!')
      navigate(location.state? location.state: '/')
    })
     .catch(error => {
      console.error(error)
      toast.error(error.message)
    })
  }

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: `url(${loginBg})` }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Login Now
        </h1>


        <div className="card w-70 md:w-90 lg:w-100 bg-white/20 backdrop-blur-xl border border-white/30 shadow-lg hover:scale-105 transition-all duration-500">

          <form onSubmit={handleLogin} className="card-body">
            <fieldset className="space-y-3">

              {/* Email */}
              <div>
                <label className="text-white text-sm">Email</label>
                <input
                  type="email" name='email'
                  placeholder="Enter your email"
                  className="input w-full bg-white/70 text-black placeholder-gray-500 
                  focus:outline-none focus:ring-1 focus:ring-[#FFC107] transition"
                />
              </div>

              {/* Password */}
              <div>
                <label className="text-white text-sm">Password</label>
                <div className='relative'>
                  <input
                  type={hide ? "password" : "text"} name="password"
                  placeholder="Enter your password"
                  className="input w-full bg-white/70 text-black placeholder-gray-500 
                  focus:outline-none focus:ring-1 focus:ring-[#FFC107] transition"
                />
                <button type="button" className='absolute right-3 top-1/2 -translate-y-1/2 text-xl' onClick={() => setHide(!hide)}>{hide? <FaRegEye /> : <IoIosEyeOff />}</button>
                </div>
              </div>

              {/* Forgot */}
              <div className="text-right">
                <a className="text-sm text-white/80 hover:text-[#FFC107] cursor-pointer">
                  Forgot password?
                </a>
              </div>

              {/* Button */}
              <button className="w-full mt-2 bg-[#FFC107] text-black font-semibold py-2 rounded-lg 
              hover:bg-[#e0a800] transition-all duration-300 hover:scale-105">
                Login
              </button>

              <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5] w-full mt-2 hover:bg-gray-100 transition-all duration-300 hover:scale-105 rounded-lg">
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                Login with Google
              </button>

              <div>
                <h1>Don't have an account?<NavLink className="text-[#ffd148] hover:text-[#e0a800] transition-colors duration-300" to="/auth/register"> Register </NavLink></h1>
              </div>
            </fieldset>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Login