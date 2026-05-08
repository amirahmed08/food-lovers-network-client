import React from "react";
import { UtensilsCrossed } from "lucide-react";

const Loading = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#FFC107] overflow-hidden">
      
      <div className="text-center">

        {/* Logo */}
        <div className="flex justify-center mb-6 animate-bounce">
          <div className="bg-white p-5 rounded-full shadow-2xl">
            <UtensilsCrossed size={55} className="text-[#FFC107]" />
          </div>
        </div>

        {/* Website Name */}
        <h1 className="text-6xl md:text-7xl text-white lobster-two-bold drop-shadow-lg">
          FoodNet
        </h1>

        {/* Subtitle */}
        <p className="text-white text-lg mt-3 tracking-wide font-medium">
          Delicious Reviews Loading...
        </p>

        {/* Animated Dots */}
        {/* <div className="flex justify-center gap-2 mt-8">
          <span className="w-4 h-4 bg-white rounded-full animate-bounce"></span>
          <span className="w-4 h-4 bg-white rounded-full animate-bounce [animation-delay:0.2s]"></span>
          <span className="w-4 h-4 bg-white rounded-full animate-bounce [animation-delay:0.4s]"></span>
        </div> */}

        {/* Loading Bar */}
        {/* <div className="w-72 h-3 bg-white/30 rounded-full overflow-hidden mt-8 mx-auto">
          <div className="h-full bg-white rounded-full animate-[loading_2s_linear_infinite]"></div>
        </div> */}

      </div>

      {/* Custom Animation */}
      {/* <style>
        {`
          @keyframes loading {
            0% {
              width: 0%;
            }
            50% {
              width: 70%;
            }
            100% {
              width: 100%;
            }
          }
        `}
      </style> */}
    </div>
  );
};

export default Loading;