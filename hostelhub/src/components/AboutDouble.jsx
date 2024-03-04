import React from 'react'

const AboutDouble = () => {
  return (
    <div className='w-full h-full flex flex-wrap bg-[#EFF5FF] p-4 shadow-inner'>
        <div className='flex flex-col p-4 ml-28  max-w-screen-lg h-full mt-5 w-1/2'>
            <div className='pb-8'>
            <p className="text-4xl font-bold inline">Want to book your room at the earliest ?</p>
            </div>
            <div className='flex'>
                <ul className='list-disc ml-4'>
                    <li className='text-xl text-gray-500'>Login to HostelHub Website and click on get started to book your desired room.</li>
                    <li className='text-xl text-gray-500'>After that you will be directed to the page which will ask you you to choose among double and single room </li>
                    <li className='text-xl text-gray-500'>Click to choose your desired room</li>
                    <li className='text-xl text-gray-500'>Now you will be dorected to the form page which will show you total rooms, available rooms and booked rooms</li>
                    <li className='text-xl text-gray-500'>Fill the form beside it with your details</li>
                    <li className='text-xl text-gray-500'>Select your roommate if you want to have double room</li>
                    <li className='text-xl text-gray-500'>Just click on "Boom my room" and get OTP, fill the OTP click on Submit and That's it! Your desired room is booked</li>
                </ul>
            </div>
        </div>
    </div>
    
  )
}


export default AboutDouble