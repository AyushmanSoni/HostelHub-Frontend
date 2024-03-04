import React from 'react'
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className='text-black'>
        <div className='max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center '>
            <p className='text-[#304AC1] font-bold p-2'>ELEVATE YOUR EXPERIENCE</p>
            <h1 className='md:text-5xl sm:text-4xl text-2xl font-bold md:py-4 text-[#091553]'>Revolutionise your hostel booking</h1>
            <div className='flex justify-center'>
                <p className='md:text-3xl sm:text-2xl text-0.5xl font-bold mr-3 text-[#304AC1]'>Fast, effortless and exciting</p>
                <ReactTyped className='md:text-3xl sm:text-2xl text-0.5xl font-bold text-[#575C75]'
                strings={['Hostel booking','roommate matching']} typespeed={40} backspeed={60} loop/>
            </div>
            <button className='text-white bg-[#091553] w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Book my room</button>
        </div>
    </div>
  )
}

export default Hero