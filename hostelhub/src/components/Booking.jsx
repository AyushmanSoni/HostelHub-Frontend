import React from 'react'

const Details = () => {
  return (
    <div name="contact" className="w-full h-full  p-4 text-[#091553]">
        <div className="flex flex-col p-4 ml-28  max-w-screen-lg h-full mt-5">
            <div className="pb-8 ">
                <p className="text-4xl font-bold inline">Booking Details</p>
                <p className="py-2 text-[#304AC1]">Submit the form below to book your desired room</p>
            </div>
            <div className="flex ">
                <form className='w-full max-w-lg' action="">
                    <div className='flex flex-wrap -mx-3 mb-6'>
                        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                         Full Name
                         </label>
                        </div>

                    </div>
                </form>
                <form action="https://getform.io/f/27e50865-c485-4221-86af-f54922b3b445" method="POST" className="flex flex-col w-full md:w-1/2">
                    <input type="text" name="name" placeholder="Enter your name"
                    className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
                    <input type="text" name="email" placeholder="Enter your email"
                    className=" my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
                    <textarea name="message" rows="10"  placeholder="Enter your message" className="p-2 bg-transparent border-2 rounded-md
                     text-white focus:outline-none"></textarea>

                     <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 
                     py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Let's Talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Details