import React from 'react'
import bed1 from '../assests/Frame 292.png'
import bed2 from '../assests/Frame 293.png'
import bed3 from '../assests/Frame 293 (1).png'
const RoomType = () => {
  return (
    // <div className='flex flex-col items-center justify-center gap-y-10 w-full shadow-lg h-screen' >
    //     <div className='flex flex-col items-center justify-center gap-y-2'>
    //     <div className="text-5xl font-bold text-[#091553]">
    //     Which type of room do you want ?
    //     </div>
    //     </div>
    //     <div className=' flex flex-col sm:flex-row  gap-8 px-12 sm:px-0 sm:w-[70%] items-center justify-center'>
    //     <div className=' items-center justify-center h-[400px] max-w-sm mx-auto rounded overflow-hidden bg-[#EBEFFA] border-2 border-[#091553] shadow-2xl'>
    //     <h1 className='font-bold text-[#304AC1] m-10 text-3xl'>Double Room</h1>
    //         <img className='w-full' src={bed1} alt="selectroom" />
            
    //         <button className="text-white bg-[#091553] hover:bg-[#304AC1] hover:font-semibold mx-4 justify-center font-semibold
    //                  py-3  px-36 my-4 items-center rounded-md ">Proceed</button>
    //     </div>
    //     <div className='max-w-sm rounded overflow-hidden bg-[#EBEFFA] border-2 border-[#091553] shadow-2xl'>
    //     <h1 className='font-bold text-[#304AC1] m-10 text-3xl'>Single Room</h1>
    //         <img className='w-full' src={bed3} alt="selectroom" />
            
    //         <button className="text-white bg-[#091553] hover:bg-[#304AC1] hover:font-semibold mx-4 justify-center font-semibold
    //                  py-3  px-36 my-4 items-center rounded-md ">Proceed</button>
    //     </div>
    //     </div>
    // </div>
    <div className='flex flex-col items-center justify-center h-[600px]'>
      <div className='font-bold sm:text-4xl text-3xl px-12 text-center text-[#091553]'>
        Which type of room do you want ?
      </div>
      <div className='grid sm:grid-cols-2  sm:gap-8'>
        <div className='py-10 w-72 '>
          <div className='overflow-hidden bg-[#EBEFFA] text-center rounded border-2 border-[#091553]'>
            <p className='font-semibold text-[#091553] sm:text-[24px] p-4 '>Double room</p>
            <img className='h-64 ml-[14px] w-64' src={bed1} alt="" />
            <button className='text-white bg-[#091553] hover:bg-[#304AC1] hover:font-semibold mx-4 justify-center font-semibold py-[12px] my-4 px-24 items-center rounded-md '>Proceed</button>
          </div>
        </div>
        <div className='py-10'>
          <div className='overflow-hidden bg-[#EBEFFA] text-center rounded border-2 border-[#091553] '>
            <p className='font-semibold text-[#091553] sm:text-[24px] p-4 '>Single room</p>
            <img className='h-64 ml-[14px] w-64' src={bed3} alt="" />
            <button className='text-white bg-[#091553] hover:bg-[#304AC1] hover:font-semibold mx-4 justify-center font-semibold py-[12px] my-4 px-24 items-center rounded-md '>Proceed</button>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default RoomType