import React from 'react'
import { useLoaderData } from 'react-router';
import AllFoodCard from '../Components/AllFoodCard/AllFoodCard';

const AllReview = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="container max-w-7xl mx-auto py-15">
            <h1 className='text-5xl text-center font-bold my-6 pt-5 cormorant-infant'>Popular Food Review</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
                {
                    data.map(data => <AllFoodCard key={data._id} data={data} />)
                }
            </div>
        </div>
  )
}

export default AllReview