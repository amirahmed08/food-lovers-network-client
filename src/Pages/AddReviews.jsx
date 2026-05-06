import React, { useState } from "react";

const AddReview = () => {
  const [rating, setRating] = useState(0);

  

  return (
    <div className="min-h-screen bg-[#fff9e2] py-25 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
        
        <h2 className="text-2xl font-bold mb-6 text-center">
          Add Your Review 🍽️
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Food Info */}
          <div>
            <h3 className="font-semibold mb-2">Food Info</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <input name="food_name" placeholder="Food Name" className="input input-bordered w-full" required />
              
              <select name="food_category" className="input input-bordered w-full">
                <option>Local</option>
                <option>Fast Food</option>
                <option>Dessert</option>
              </select>

              <input name="image_url" placeholder="Food Image URL" className="input input-bordered w-full md:col-span-2" />
            </div>
          </div>

          {/* Restaurant Info */}
          <div>
            <h3 className="font-semibold mb-2">Restaurant Info</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <input name="restaurant_name" placeholder="Restaurant Name" className="input input-bordered w-full" />
              <input name="location" placeholder="Location" className="input input-bordered w-full" />
              <input name="restaurant_website" placeholder="Website (optional)" className="input input-bordered w-full md:col-span-2" />
            </div>
          </div>

          {/* Price */}
          <div>
            <h3 className="font-semibold mb-2">Price</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <input type="number" name="price_min" placeholder="Min Price" className="input input-bordered w-full" />
              <input type="number" name="price_max" placeholder="Max Price" className="input input-bordered w-full" />
              <select name="currency" className="input input-bordered w-full">
                <option>BDT</option>
                <option>USD</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-semibold mb-2">Description</h3>
            <textarea name="food_description" className="textarea textarea-bordered w-full" placeholder="Describe the food..." />
          </div>

          {/* Review */}
          <div>
            <h3 className="font-semibold mb-2">Your Review</h3>

            {/* ⭐ Star Rating */}
            <div className="flex gap-2 mb-3">
              {[1,2,3,4,5].map((star) => (
                <span
                  key={star}
                  onClick={() => setRating(star)}
                  className={`cursor-pointer text-2xl ${
                    star <= rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>

            <textarea name="review" className="textarea textarea-bordered w-full" placeholder="Write your experience..." />
          </div>

          {/* Submit */}
          <button className="btn btn-primary w-full">
            Submit Review
          </button>

        </form>
      </div>
    </div>
  );
};

export default AddReview; 