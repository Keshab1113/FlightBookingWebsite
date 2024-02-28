import React from 'react'
import Destination from '../../components/Destination/Destination'

const Destinition = () => {
  return (
      <div className=' h-full bg-slate-100 flex items-center flex-col'>
          <h1 className=' text-4xl font-semibold mt-8 mb-8 text-slate-800 text-center'>Most Visited Destination</h1>
          <div className=' w-[80%] grid sm:grid-cols-3 grid-cols-1 gap-4 justify-center mb-8'>
              <Destination />
              <Destination />
              <Destination />
              <Destination />
              <Destination />
              <Destination />
          </div>
    </div>
  )
}

export default Destinition
