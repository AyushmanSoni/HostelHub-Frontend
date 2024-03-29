import React from 'react'
import img7 from '../assests/new.png'
import { Link } from 'react-router-dom'

const NewLogin = () => {
  return (
    <div className='flex h-screen'>
      <div className='hidden sm:block w-1/2 bg-gradient-to-t from-[#B2C6EC] to-white text-red-500'>
        <div className='font-extrabold text-[#091553] text-left text-4xl ml-24 mt-16'>
          HostelHub.
        </div>
        <div className='ml-24 mt-20'>
        <div className='font-bold text-5xl text-[#091553]'>Unlock your</div>
        <div className='flex flex-wrap mt-2'>
          <div className='font-bold text-5xl text-[#091553]'>hostel with</div>
          <div className='ml-2 font-bold text-[#8D98D4] text-5xl'>the ease..</div>
        </div>
        </div>
        <div>
          <img className='m-auto mt-24 h-[280px] w-[500px]' src={img7} alt="" />
        </div>
      </div>
      <div className=' flex flex-col justify-center items-center sm:w-1/2 w-full'>
        <div className='mt-16'>
          <div className='sm:text-left text-center text-[#091553] font-bold sm:text-4xl text-3xl'>
            Sign to HostelHub.
          </div>
          <div className='sm:text-[14px] font-semibold text-[#8D98D4] pt-2'>
            Unlock your hostel with the ease
          </div>
          <div className='w-full max-w-xs'>
            <form className='bg-white rounded pt-10 pb-8 mb-4' action="">
            <div class="mb-4">
            <label class="block text-[#8D98D4] text-sm font-bold mb-2" for="Enrollment-Id">
             Enrollment Id
            </label>
            <input class="appearance-none border-2 border-[#091553] rounded-lg bg-[#EFF5FF] w-full py-2 px-3 text-gray-700 leading-tight focus:bg-white" id="Enrollment-Id" type="text" placeholder="IFE2022005"/>
          </div>
          <div class="mt-4 mb-6">
            <label class="block text-[#8D98D4] text-sm font-bold mb-2" for="password">
              Password
            </label>
            <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.js" defer></script>
            <input class="appearance-none border-2 border-[#091553] rounded-lg bg-[#EFF5FF] w-full py-2 px-3 text-gray-700 mb-3 leading-tight  focus:bg-white" id="password" type="password" placeholder="******************"/>
            {/* <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">

                    <svg class="h-6 text-gray-700" fill="none" Onclick="show = !show {'hidden': !show, 'block':show }"
                       xmlns="http://www.w3.org/2000/svg"
                      viewbox="0 0 576 512">
                      <path fill="currentColor"
                        d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z">
                      </path>
                    </svg>

                    <svg class="h-6 text-gray-700" fill="none" Onclick="show = !show {'block': !show, 'hidden':show }"
                       xmlns="http://www.w3.org/2000/svg"
                      viewbox="0 0 640 512">
                      <path fill="currentColor"
                        d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z">
                      </path>
                    </svg>

                  </div> */}
          </div> <Link to = "/home">

         
          <button className="text-white hover:bg-[#091553]  px-6 w-full border-2 border-[#091553]
                     py-2 my-8 flex justify-center items-center text-bold bg-[#304AC1] rounded-lg ">Sign in</button>  </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewLogin