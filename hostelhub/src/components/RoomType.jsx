import React from 'react'
import bed1 from '../assests/Frame 292.png'
import bed2 from '../assests/Frame 293.png'
import bed3 from '../assests/Frame 293 (1).png'
const RoomType = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-y-10 w-full h-screen'>
        <div className='flex flex-col items-center justify-center gap-y-2'>
        <div className="text-5xl font-bold text-[#091553]">
        Which type of room do you want ?
        </div>
        </div>
        <div className=' flex flex-row gap-8 px-12 sm:px-0 w-[70%] items-center justify-center'>
        <div className=' items-center justify-center max-w-sm rounded overflow-hidden bg-[#EBEFFA] border-2 border-[#091553] shadow-2xl'>
        <h1 className='font-bold text-[#304AC1] m-10 text-3xl'>Double Room</h1>
            <img className='w-full' src={bed1} alt="selectroom" />
            
            <button className="text-white bg-[#091553]  mx-4 justify-center font-semibold
                     py-3  px-36 my-4 items-center rounded-md ">Proceed</button>
        </div>
        <div className='max-w-sm rounded overflow-hidden bg-[#EBEFFA] border-2 border-[#091553] shadow-2xl'>
        <h1 className='font-bold text-[#304AC1] m-10 text-3xl'>Single Room</h1>
            <img className='w-full' src={bed3} alt="selectroom" />
            
            <button className="text-white bg-[#091553]  mx-4 justify-center font-semibold
                     py-3  px-36 my-4 items-center rounded-md ">Proceed</button>
        </div>
        </div>
    </div>
  )
}

export default RoomType