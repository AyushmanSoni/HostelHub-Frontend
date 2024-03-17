import React from 'react'

import img4 from '../assests/select.png'
import img5 from '../assests/find.png'
import img6 from '../assests/submit3.png'


const Hiw = () => {
    
  return (
    <div className="flex flex-col items-center justify-center gap-y-10 w-full h-screen">
    <div className="flex flex-col items-center justify-center gap-y-2">
      <div className="sm:text-5xl text-4xl font-semibold text-[#091553]">
        How it works!
      </div>
      <div className="font-normal text-2xl text-[#6d7392]">
        In 3 Easy Steps
      </div>
    </div>
    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 w-[70%]  '>
        <div className='max-w-sm sm:h-[400px] sm:w-[280px] bg-[#EBEFFA] rounded overflow-hidden border-2 border-[#091553]'>
            <img className='w-full' src={img4} alt="selectroom" />
            <h1 className='font-bold text-[#091553] sm:pt-8 text-center sm:pb-2 sm:px-20 text-2xl'>Step 1</h1>
            <div className='text-[#091553] px-2 text-center font-semibold'>
                Simply select the type of room you want either Single or Double
            </div>
        </div>
        <div className='max-w-sm rounded sm:h-[400px] sm:w-[280px] bg-[#EBEFFA] overflow-hidden border-2 border-[#091553]'>
            <img className='w-full' src={img5} alt="selectroom" />
            <h1 className='font-bold text-[#091553] sm:pt-8 text-center sm:pb-2 sm:px-20 text-2xl'>Step 2</h1>
            <div className='text-[#091553] px-2 font-semibold text-center'>
            Choose who you'd like to have as your roommate in the registration form
            </div>
        </div>
        <div className='max-w-sm rounded sm:h-[400px] sm:w-[280px] bg-[#EBEFFA] overflow-hidden border-2 border-[#091553]'>
            <img className='w-full' src={img6} alt="selectroom" />
            <h1 className='font-bold text-[#091553] text-center sm:pt-8 sm:pb-2 sm:px-20 text-2xl'>Step 3</h1>
            <div className='text-[#091553] px-2 pb-4 font-semibold text-center'>
                Fill your details in the form and submit, enter OTP and its done.
            </div>
        </div>

        
    </div>
  </div>
  )
}

export default Hiw