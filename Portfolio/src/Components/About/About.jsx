import React from 'react'
import { FaFacebook } from "react-icons/fa";

const About = () => {
  return (
    <div className="about border border-black h-fit flex w-[70%] justify-center">
      <div className="pic w-2/4">
        <img src="./hero.jpg" alt="pic"/>
        <div className="icon">
          <FaFacebook />
        </div>
      </div>
      <div className="txt w-2/4">
        <h1>I am Professional User Experience Designer</h1>
        <p>I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences.</p>
        <p>I design and develop services for customers specializing creating stylish, modern websites, web services.</p>
        <div className="but">
          <button>My Project</button>
          <button>Download CV</button>
        </div>
      </div>

   </div>
  )
}

export default About