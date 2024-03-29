import React from 'react'
import { Link } from 'react-router-dom';

const Confirm = () => {
  return (
    <div>
        <div className='pt-32'>
            <h1 className='font-bold sm:text-4xl text-3xl px-12 text-center text-[#091553]'>
                Congratulations!! Your Room has been booked..
            </h1>
            <h2 className='font-bold pt-4 sm:text-2xl text-1xl px-12 text-center text-[#304AC1]'>Thank you for using HostelHub.</h2>
        </div>
        <div className='pl-48 pt-8'>
            <h1 className=' font-semibold pt-4 sm:text-3xl text-1xl px-12  text-gray-600'>Your Booking Details</h1>
            <div className='pt-4 pl-12'>
                <p className='text-2xl text-[#091553] font-semibold'>Name : Ayushman Soni</p>
                <p className='font-semibold text-gray-500'>Enrollment No. : IFE2022005</p>
                <p className='font-semibold text-gray-500'>email : ife2022005@iiita.ac.in</p>
                <p className='font-semibold text-gray-500'>Hostel : BH3</p>
                <p className='font-semibold text-gray-500'>Room No. : 811</p>
                <p className='text-2xl text-[#091553] font-semibold pt-4'>Roommate : Siddharth Singh</p>
                <p className='font-semibold text-gray-500'>Enrollment No. : IEC2022110</p>
                <p className='font-semibold text-gray-500'>Email : iec2022110@iiita.ac.in</p>
                <p></p>
            </div>
        </div>
        <div className='pt-8'>
        <Link to = "/home2">
            <button className='ml-60 text-white bg-[#304AC1] hover:font-semibold  border w-20 h-10 items-center rounded '>Home</button></Link>
        </div>
    </div>
  )
}

export default Confirm