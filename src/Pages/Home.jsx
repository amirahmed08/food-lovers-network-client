import React from 'react'
import Header from '../Components/Header/header'
import LatestFoods from '../Components/LatestFoods/LatestFoods'
import { useLoaderData } from 'react-router'

const Home = () => {

  const latestReviewPromise = useLoaderData()

  return (
    <div>
      <Header></Header>
      <LatestFoods latestReviewPromise={latestReviewPromise}></LatestFoods>
    </div>
  )
}

export default Home