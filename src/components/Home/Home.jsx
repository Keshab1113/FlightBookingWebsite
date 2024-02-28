import React from 'react'
import Search from '../Search/Search'
import TravelSupport from '../../pages/TravelSupport/TravelSupport'
import FeedBack from '../../pages/FeedBack/FeedBack'
import Aboutus from '../../pages/AboutUs/Aboutus'
import Destinition from '../../pages/Destinitons/Destinition'
import TrendingDestination from '../../pages/Trending/TrendingDestination'

const Home = () => {
  return (
    <div className='h-full'>
      <Search />
      <TrendingDestination />
      <Aboutus />
      <TravelSupport />
      <Destinition/>
      <FeedBack />
    </div>
  )
}

export default Home
