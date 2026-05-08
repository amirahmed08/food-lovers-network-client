import React from 'react'
import { NavLink } from 'react-router'

const AllFoodCard = ({ data }) => {
    const { _id } = data;
  return (
    <div className="card w-auto  md:w-90 lg:w-96 bg-base-100 shadow-lg hover:shadow-xl transition duration-300">
  {/* Image */}
  <figure className="relative">
    <img
      src={data.image_url}
      alt="Panta Ilish"
      className="h-52 w-full object-cover"
    />
    <span className="absolute top-2 right-2 bg-[#FFC107] text-white px-3 py-1 rounded-full text-sm font-medium">
      {data.food_category}
    </span>
  </figure>

  {/* Content */}
  <div className="card-body p-4">
    
    <h2 className="card-title text-lg font-bold">
      {data.food_name}
    </h2>

    {/* Restaurant & Location */}
    <p className="text-sm text-gray-500">
      {data.restaurant_name} • {data.location}
    </p>

    {/* Price */}
    <p className="text-sm font-medium text-primary">
      {data.price_min}-{data.price_max} BDT
    </p>

    {/* Rating */}
   <div className="flex items-center gap-1">
  {[...Array(5)].map((_, i) => (
    <span
      key={i}
      className={`text-lg ${
        i < data.rating ? "text-yellow-400" : "text-gray-300"
      }`}
    >
      ★
    </span>
  ))}
</div>

    {/* Short Review */}
    <p className="text-sm text-gray-600 line-clamp-2">
      {data.food_description}
    </p>

    {/* Action */}
    <div className="card-actions justify-end mt-2">
      <NavLink to={`/foods/${data._id}`} className="border border-[#FFC107] px-5 py-2 rounded-lg text-sm font-medium text-[#FFC107] hover:bg-[#FFC107] hover:text-white transition duration-300">
        View Details
      </NavLink>
    </div>
  </div>
</div>
  )
}

export default AllFoodCard