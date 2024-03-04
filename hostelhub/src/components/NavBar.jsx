import React ,{useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const NavBar = () => {
    const [nav,setNav] = useState(false)

    const handleNav =() => {
        setNav(!nav)
    }
  return (
    <div className='text-white flex justify-between items-center h-20 w-full mx-auto px-20 bg-[#091553]'>
        <h1 className='w-full text-3xl font-bold text-white'>HostelHub.</h1>
        <ul className='hidden md:flex'>
            <li className='p-6'>Home</li>
            <li className='p-6'>Booking</li>
            <li className='p-6'>Acount</li>
            <li className='p-6'>About</li>
            <li className='p-6'>Contact</li>
            <button className='text-white bg-[#304AC1] border w-20 h-10 items-center mt-4 ml-6 rounded'>Sign out</button>

        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={20}/> :<AiOutlineMenu size={20}/>}
        
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#FFFFFF] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#304AC1] mt-7 ml-4'>HostelHub.</h1>
            <ul className='uppercase p-4'>
            <li className='p-4 border-b border-gray-200'>Home</li>
            <li className='p-4 border-b border-gray-200'>Booking</li>
            <li className='p-4 border-b border-gray-200'>Acount</li>
            <li className='p-4 border-b border-gray-200'>About</li>
            <li className='p-4'>Contact</li>
            </ul>
        </div>
    </div>
  );
    
}

export default NavBar