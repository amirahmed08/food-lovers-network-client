import React, { use, useState } from "react";
import bgImage from "../assets/loginBg.png";
import { AuthContext } from "../Provider/AuthProvider";

const AddReview = () => {
  const [rating, setRating] = useState(0);
  const { user } = use(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const data = {
      food_name: form.food_name.value,
      image_url: form.image_url.value,
      restaurant_name: form.restaurant_name.value,
      location: form.location.value,
      review: form.review.value,
      rating,
      user_email: user?.email,
      created_at: new Date().toISOString(),
    };

    fetch("http://localhost:3000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(result => {
        console.log('Saved to DB:', result);
        if (result.insertedId) {
          alert('Review added successfully!');
          form.reset();
          setRating(0);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center relative py-10 px-4 overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="pt-20 pb-10">
        <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-xl p-8">

        <h2 className="text-3xl font-bold text-center mb-6 cormorant-infant">
           Share Your Food Experience
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Food Name */}


          <input
            name="food_name"
            placeholder="Food Name"
            required
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-yellow-400 transition"
          />


          {/* Image URL */}
          <input
            name="image_url"
            placeholder="Food Image URL"
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-yellow-400 transition"
          />

          {/* Restaurant */}
          <input
            name="restaurant_name"
            placeholder="Restaurant Name"
            required
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-yellow-400 transition"
          />

          {/* Location */}
          <input
            name="location"
            placeholder="Location"
            required
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-yellow-400 transition"
          />

          {/* ⭐ Rating */}
          <div>
            <p className="mb-2 font-medium">Your Rating</p>
            <div className="flex gap-2 text-3xl">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => setRating(star)}
                  className={`cursor-pointer transition ${star <= rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          {/* Review */}
          <textarea
            name="review"
            placeholder="Write your experience..."
            required
            className="w-full p-3 border rounded-xl h-28 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-md font-semibold text-black bg-[#FFC107] hover:bg-yellow-500 transition duration-300 shadow-md"
          >
            Submit Review
          </button>

        </form>
      </div>
      </div>
    </div>
  );
};

export default AddReview;