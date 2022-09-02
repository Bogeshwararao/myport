import React,{useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Kbr from "../assets/kbr.png";
 const Navbar = () => {
    const {nav ,setNav}= useState(false)
    const handleClick =()=> setNav(!nav)

     
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a1924] text-gray-300'>
        <div>
            <img src={Kbr} alt="Logo " style={{width: '120px'}}/>
        </div>
        {/*Menu */}
        <div>
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contacts</li>

            </ul>
        </div>
        {/* Hamburg */}
        <div onClick={handleClick} className='md:hidden z-10'>
           { !nav ?  <FaBars/> : <FaTimes/>}
        </div>
         {/* Mobile View */}
          <ul className= { !nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#09172e] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Home</li>
                <li  className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Work</li>
                <li className='py-6 text-4xl'>Contacts</li>
         </ul>

         {/*  Social view*/}
         <div className='hidden'></div>
    </div>

  )
}
export default Navbar