import React from 'react'
import { MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="bg-[#F0F1F3] z-10 relative">
      <nav className="navbar navbar-expand-lg px-4 py-4 items-center shadow-lg shadow-[#30464889] ">
        <ul className="list-none flex justify-between text-cyan-500 font-medium text-[20px] bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500" >
          <div className="hover:bg-gray-400 rounded-md"><a href=""><li className="navitem w-20 bg-none" ><img src="./logo.png" alt="logo" /></li></a>
          </div>
          <div className="flex float-end space-x-10 items-center uppercase"> <a href=""><li className="navitem hover:font-bold hover:text-black">Home</li></a>
          <a href=""><li className="navitem hover:font-bold hover:text-black">About</li></a>
            <a href=""><li className="navitem hover:font-bold hover:text-black">Project</li></a>
            <a href=""><li className="navitem hover:font-bold hover:text-black">Services</li></a>
            <a href=""><li className="navitem hover:font-bold hover:text-black">Contact</li></a >
            <a href=""><li className="text-[24px] text-black"><MdOutlineDarkMode/></li></a >
          </div>
        </ul>
   </nav>
    </div>
  )
}

export default Navbar