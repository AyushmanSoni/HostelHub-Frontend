import React from 'react'
import img1 from '../assests/Room.jpg'
import img2 from '../assests/roommate.jpg'
import img3 from '../assests/submit.jpg'
import img4 from '../assests/Room-01.jpeg'
import img5 from '../assests/roommate-01.jpeg'
import img6 from '../assests/submit-01.jpeg'



const Hiw = () => {

    
  return (
    <div className="flex flex-col items-center justify-center gap-y-10 w-full h-screen">
    <div className="flex flex-col items-center justify-center gap-y-2">
      <div className="text-5xl font-semibold text-[#091553]">
        How it works!
      </div>
      <div className="font-normal text-2xl text-[#6d7392]">
        In 3 Easy Steps
      </div>
    </div>
    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 w-[70%]  '>
        <div className='max-w-sm rounded overflow-hidden border-2 border-[#091553]'>
            <img className='w-full' src={img4} alt="selectroom" />
            <h1 className='font-bold text-[#091553] m-10 text-2xl'>Step 1</h1>
            <div className='text-[#091553] font-semibold m-4 text-center'>
                Simply select the type of room you want either Single or Double
            </div>
        </div>
        <div className='max-w-sm rounded overflow-hidden border-2 border-[#091553]'>
            <img className='w-full' src={img5} alt="selectroom" />
            <h1 className='font-bold text-[#091553] m-10 text-2xl'>Step 2</h1>
            <div className='text-[#091553] font-semibold m-4 text-center'>
            Choose who you'd like to have as your roommate in the registration form
            </div>
        </div>
        <div className='max-w-sm rounded overflow-hidden border-2 border-[#091553]'>
            <img className='w-full' src={img6} alt="selectroom" />
            <h1 className='font-bold text-[#091553] m-10 text-2xl'>Step 3</h1>
            <div className='text-[#091553] font-semibold m-4 text-center'>
                Fill your details in the form and submit, enter OTP and its done.
            </div>
        </div>

        
    </div>
  </div>
  )
}

export default Hiw