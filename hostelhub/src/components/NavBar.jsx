import React ,{useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {Link} from 'react-scroll'

const NavBar = () => {

    const links =[
        {
            id: 1,
            link: "Home"
        },
        {
            id: 2,
            link: "Booking"
        },
        {
            id: 4,
            link: "About"
        },
        {
            id: 5,
            link: "Contact"
        },

    ]
    const [nav,setNav] = useState(false)

    const handleNav =() => {
        setNav(!nav)
    }
  return (
    <div className=' fixed flex justify-between items-center h-20 w-full mx-auto px-20 bg-[#091553]'>
        <h1 className='w-full text-3xl font-bold text-white'>HostelHub.</h1>
        <ul className='hidden md:flex'>
            {links.map(({id , link,path})=>(
                <li 
                   key={id} 
                   className='p-6 text-white font-semibold cursor-pointer hover:scale-110 duration-200'>
                    <Link to={link} smooth duration={500}>{link}</Link>
                    </li>
            ))}
             <Link to = "/signout">
            <button className='text-white bg-[#304AC1] hover:font-semibold hover:bg-[#EFF5FF] hover:text-[#091553] border w-20 h-10 items-center mt-4 ml-6 rounded'>Sign out</button></Link>
        </ul>

        

        <div onClick={handleNav} className='block md:hidden cursor-pointer text-white'>
            {!nav ? <AiOutlineClose size={20}/> :<AiOutlineMenu size={20}/>}
        </div>

        {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 h-screen w-[50%] bg-[#EBEFFA]'>
            {links.map(({id , link})=>(
            <li 
               key={id} 
               className='px-4 cursor-pointer py-6 text-4xl'>
                {link}
                </li>
            ))}

    </ul>
        )}
        
        {/* <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#FFFFFF] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#304AC1] mt-7 ml-4'>HostelHub.</h1>
            <ul className='uppercase p-4'>
            <li className='p-4 border-b text-[#091553] border-gray-200'>Home</li>
            <li className='p-4 border-b border-gray-200'>Booking</li>
            <li className='p-4 border-b border-gray-200'>Acount</li>
            <li className='p-4 border-b border-gray-200'>About</li>
            <li className='p-4'>Contact</li>
            </ul>
        </div> */}
    </div>
  );
    
}

export default NavBar