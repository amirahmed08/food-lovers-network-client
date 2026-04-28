import React from 'react'
import bannerImg from '../../assets/wev.jpg'
import mobileBannerImg from '../../assets/bannerImage.jpg'

const Header = () => {

  // const isMobile = window.innerWidth <768;

  return (
    <div className="relative">
      
      {/* Banner Image */}
      
        <img
        className="hidden md:block lg:block h-[600px] w-full object-cover"
        src={bannerImg}
        alt="Banner"
      />
      
        <img
        className="md:hidden lg:hidden block h-[600px] w-full object-cover"
        src={mobileBannerImg}
        alt="Banner"
      />
        {/* <img
        className="md:hidden lg:hidden block h-[600px] w-full object-cover"
        src={isMobile ? mobileBannerImg : bannerImg}
        alt="Banner"
      /> */}
      

      {/* Gradient Overlay (IMPORTANT) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        
        <h1 className="text-5xl md:text-6xl font-bold text-[#FFC107] drop-shadow-lg">
          Welcome to FoodNet
        </h1>

        <p className="text-lg md:text-2xl mt-4 text-gray-200 max-w-3xl leading-relaxed">
          Taste, review, and connect through food. Find and share the best <br />
          food experiences with <span className="lobster-two-regular text-[#FFC107]">FoodNet</span> community
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          
          <button className="px-6 py-3 bg-[#FFC107] text-black rounded-full text-lg font-medium shadow-lg hover:scale-95 transition duration-300">
            Explore Now
          </button>

          <button className="px-6 py-3 border border-white/50 backdrop-blur-md rounded-full text-lg hover:bg-white/20 transition duration-300">
            Learn More
          </button>

        </div>
      </div>
    </div>
  )
}

export default Header