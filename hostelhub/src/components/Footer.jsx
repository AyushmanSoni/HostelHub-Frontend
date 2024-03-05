import React from 'react'

const Footer = () => {
  return (
    <div className='w-full flex sm:flex-row flex-row pt-10 pb-6 justify-around  text-white  bg-[#091553]'>
        <div className='flex gap-4 sm:justify-center'>
            <div>
                <p className='text-white font-bold text-2xl'>HostelHub.</p>
                <p className='  w-40'>Fast and easy way to choose your room and roommate</p>
            </div>
        </div>
        <div className='flex flex-col'>
            <div className='font-semibold text-white text-2xl'>
                Follow us on
            </div>
        </div>
        </div>
  )
}

export default Footer