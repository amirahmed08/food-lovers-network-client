import React from "react";
import { NavLink, useLoaderData } from "react-router";

const CardDetailPage = () => {
  
  const review = useLoaderData();
  // console.log(review); 

  return (
    <div>
      <div className="max-w-6xl mx-auto p-4 pt-15">
      
      {/* Hero Section */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg">
        <img
          src={review.image_url}
          alt={review.food_name}
          className="w-full h-[300px] md:h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            {review.food_name}
          </h1>
          <p className="text-gray-200">
            {review.restaurant_name} • {review.location}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        
        {/* Left Side */}
        <div className="md:col-span-2 space-y-6">
          
          {/* Description */}
          <div className="bg-white shadow rounded-2xl p-5 hover:shadow-lg transition duration-300 hover:border-[#FFC107] hover:border-1">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-600">
              {review.food_description}
            </p>
          </div>

          {/* Review */}
          <div className="bg-white shadow rounded-2xl p-5 hover:shadow-lg transition duration-300 hover:border-[#FFC107] hover:border-1">
            <h2 className="text-xl font-semibold mb-2">Review</h2>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-xl ${
                    i < review.rating
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
              <span className="ml-2 text-gray-600 text-sm">
                ({review.rating}/5)
              </span>
            </div>

            <p className="text-gray-600">{review.review}</p>
          </div>
          <div>
            <NavLink to="/add-reviews">
            <button className="shadow rounded-2xl py-3 w-full font-bold text-white bg-[#FFC107] hover:shadow-lg transition duration-300">Add Your Review</button>
            </NavLink>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          
          {/* Price & Info */}
          <div className="bg-white shadow rounded-2xl p-5 hover:shadow-lg transition duration-300 hover:border-[#FFC107] hover:border-1">
            <h2 className="text-xl font-semibold mb-3">Details</h2>

            <p className="text-gray-600">
              <strong>Category:</strong> {review.food_category}
            </p>

            <p className="text-gray-600 mt-1">
              <strong>Price:</strong>{" "}
              {review.price_min} - {review.price_max} {review.currency}
            </p>

            <p className="text-gray-600 mt-1">
              <strong>Date:</strong> {review.created_at}
            </p>

            <button
              target="_blank"
              rel="noreferrer"
              className="bg-[#FFC107] text-white font-semibold rounded-2xl p-3 w-full mt-4"
            >
              Visit Website
            </button>
          </div>

          {/* User Info */}
          <div className="bg-white shadow rounded-2xl py-10 px-5 flex items-center gap-4 hover:shadow-lg transition duration-300 hover:border-[#FFC107] hover:border-1">
            <img
              src={review.user_image}
              alt={review.user_name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="font-semibold">
                {review.user_name}
              </h3>
              <p className="text-sm text-gray-500">
                {review.user_email}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
    </div>
  );
};

export default CardDetailPage;