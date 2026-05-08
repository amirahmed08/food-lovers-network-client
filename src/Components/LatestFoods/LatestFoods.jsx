import React from 'react'
import LatestFoodsCard from '../LatestFoodsCard/LatestFoodsCard'

const LatestFoods = ({ latestReviewPromise }) => {
    // console.log(latestReviewPromise)
    return (
        <div className="container max-w-7xl mx-auto">
            <h1 className='text-5xl text-center font-bold my-6 pt-5 cormorant-infant'>Latest Food Review</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
                {
                    latestReviewPromise.map(review => <LatestFoodsCard key={review._id} review={review} />)
                }
            </div>
        </div>
    )
}

export default LatestFoods