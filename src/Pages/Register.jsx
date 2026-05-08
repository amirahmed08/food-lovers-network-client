import React, { use, useState } from 'react'
import loginBg from '../assets/loginBg.png'
import { AuthContext } from '../Provider/AuthProvider'
import { NavLink } from 'react-router'
import { FaRegEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";

const Register = () => {
  const [hide, setHide] = useState(true)
  const { createUser, setUser, signInWithGoogle, updateUserProfile } = use(AuthContext)

  const handleRegister = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const photoURL = e.target.photoURL.value
    const password = e.target.password.value
    // console.log(name, email, photoURL, password)

    createUser(email, password)
      .then(result => {
        const user = result.user

        const newUser = {
        name: name,
        email: email,
        photoURL: photoURL
      }

      //create user in the database
      fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      })
      .then(res => res.json())
      .then(data => {
        console.log('data after user save', data)
      })

        setUser(user)
        toast.success('You registered successfully!!')
      })
      .catch((error) => {
        const errorCode = error.code;
    const errorMessage = error.message;
    toast.error(errorMessage)
    // ..
      });
  }


  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then(result => {
      const user = result.user

      const newUser = {
        name: result.user.displayName,
        email: result.user.email,
        photoURL: result.user.photoURL
      }

      //create user in the database
      fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      })
      .then(res => res.json())
      .then(data => {
        console.log('data after user save', data)
      })
      setUser(user)
      toast.success('You logged in successfully!!')
    })
     .catch(error => {
      console.error(error)
      toast.error(error.message)
    })
  }

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center relative py-10 px-4 overflow-hidden"
      style={{ backgroundImage: `url(${loginBg})` }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 mt-15">

        {/* Title */}
        <h1 className=" text-4xl md:text-5xl font-bold text-white">
          Register Now !
        </h1>


        <div className="card w-[280px] md:w-[360px] lg:w-[400px] bg-white/20 backdrop-blur-xl border border-white/30 shadow-lg hover:scale-105 transition-all duration-500">
          {/* <!-- From Uiverse.io by gharsh11032000 -->  */}

          <NavLink to="/auth/login">
          <button className="animated-button">
            <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              ></path>
            </svg>
            <span class="text">Back to Login</span>
            <span class="circle"></span>
            <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              ></path>
            </svg>
          </button>
          </NavLink>
          <form onSubmit={handleRegister} className="card-body">
            <fieldset className="space-y-3">

              {/* Name */}
              <div>
                <label className="text-white text-sm">Name</label>
                <input
                  type="text" name='name' required
                  placeholder="Enter your name"
                  className="input w-full bg-white/70 text-black placeholder-gray-500 
                      focus:outline-none focus:ring-1 focus:ring-[#FFC107] transition"
                />
              </div>
              {/* photoURL */}
              <div>
                <label className="text-white text-sm">Photo URL</label>
                <input
                  type="text" name='photoURL'
                  placeholder="Enter your photo URL"
                  className="input w-full bg-white/70 text-black placeholder-gray-500 
                      focus:outline-none focus:ring-1 focus:ring-[#FFC107] transition"
                />
              </div>
              {/* Email */}
              <div>
                <label className="text-white text-sm">Email</label>
                <input
                  type="email" name='email' required
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
                Register
              </button>

              <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5] w-full mt-2 hover:bg-gray-100 transition-all duration-300 hover:scale-105 rounded-lg">
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                Register with Google
              </button>
            </fieldset>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Register