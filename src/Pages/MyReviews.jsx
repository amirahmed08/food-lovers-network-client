import React, { use, useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { AuthContext } from '../Provider/AuthProvider'

const MyReviews = () => {

  const [reviews, setReviews] = useState([])
  const { user } = use(AuthContext)
  // console.log(user?.email)

  // Load Reviews
  useEffect(() => {
    if(user?.email){
      fetch(`https://food-lover-server-seven.vercel.app/reviews?email=${user.email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setReviews(data)
      })
    }
  }, [user?.email])

  // Delete Review
  const handleDeleteReview = (_id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "This review will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {

      if (result.isConfirmed) {

        fetch(`https://food-lover-server-seven.vercel.app/reviews/${_id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {

            if (data.deletedCount) {

              Swal.fire({
                title: "Deleted!",
                text: "Review deleted successfully.",
                icon: "success"
              });

              const remainingReviews = reviews.filter(
                review => review._id !== _id
              )

              setReviews(remainingReviews)
            }
          })
      }
    })
  }

  return (
    <div className="min-h-screen w-full max-w-7xl mx-auto pt-25 pb-10 px-4">

      <h1 className='font-bold text-5xl text-center mb-8 cormorant-infant'>
        My Reviews :
        <span className="text-[#FFC107] ml-2">
          {reviews.length}
        </span>
      </h1>

      <div className="overflow-x-auto shadow-sm bg-white rounded-xl">

        <table className="table w-full">

          {/* Table Head */}
          <thead>
            <tr>
              <th>SL No</th>
              <th>Food</th>
              <th>Restaurant</th>
              <th>Location</th>
              <th>Rating</th>
              <th>Review</th>
              <th>Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>

            {
              reviews.map((review, index) => (

                <tr key={review._id}>

                  {/* Serial Number */}
                  <td>{index + 1}</td>

                  {/* Food Info */}
                  <td>
                    <div className="flex items-center gap-3">

                      <div className="avatar">
                        <div className="mask mask-squircle w-14 h-14">
                          <img
                            src={review.image_url}
                            alt={review.food_name}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="font-bold">
                          {review.food_name}
                        </div>
                      </div>

                    </div>
                  </td>

                  {/* Restaurant */}
                  <td>
                    {review.restaurant_name}
                  </td>

                  {/* Location */}
                  <td>
                    {review.location}
                  </td>

                  {/* Rating */}
                  <td>
                    <div className="flex text-yellow-400 text-lg">
                      {
                        [...Array(review.rating)].map((_, i) => (
                          <span key={i}>★</span>
                        ))
                      }
                    </div>
                  </td>

                  {/* Review Text */}
                  <td className="max-w-xs">
                    {review.review}
                  </td>

                  {/* Action */}
                  <td>
                    <button
                      onClick={() => handleDeleteReview(review._id)}
                      className="border border-[#FFC107] px-5 py-2 rounded-lg text-sm font-medium text-[#FFC107] hover:bg-[#FFC107] hover:text-white transition duration-300"
                    >
                      Delete
                    </button>
                  </td>

                </tr>
              ))
            }

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyReviews