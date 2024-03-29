import React from 'react'
import AboutDouble from './AboutDouble'
import Footer from './Footer'
import { Link } from 'react-router-dom'


const Types = () => {
  return (
    <div>
        <div className='shadow-lg pb-24'>
        <div className='flex mt-8'>
            <h1 className=' text-3xl font-bold text-[#091553] ml-32 w-[80%]'>HostelHub.</h1>
            <Link to = "/logout">
            <button className='text-white bg-[#304AC1] hover:font-semibold hover:bg-[#EFF5FF] hover:text-[#091553] border w-20 h-10 items-center rounded '>Log Out</button></Link>
        </div>
        <div>
            <div className='pt-12'>
                <h1 className='font-bold sm:text-5xl text-3xl px-12 text-center text-[#091553]'>Which type of room do you want ?</h1>
            </div>
            <div className='flex justify-center pt-16 gap-16'>
               <Link to = "/double">
                <button className='py-3.5 w-72 sm:w-72 rounded-lg bg-[#304AC1] text-[#ffffff] font-semibold text-2xl sm:text-lg hover:bg-[#435cd0] '>Double Room</button> </Link>
                <Link to = "/single">
                <button className='py-3.5 w-72 sm:w-72 rounded-lg bg-[#304AC1] text-[#ffffff] font-semibold text-2xl sm:text-lg hover:bg-[#435cd0]'>Single Room</button></Link>
            </div>
        </div>
    </div>
    <AboutDouble/>
    <Footer/>
    </div>
    
  )
}

export default Types