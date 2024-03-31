import React from 'react'
import "./Hero.css"

const Hero = () => {
    const box = [{
        h1: "15 Y",
        p: "Experience",
    },
    {
        h1: "250+",
        p: "Project Completed",
    },
    {
        h1: "58+",
        p: "Happy Client",
    }]
    return (
        <div className="Hero bg-[#EDD8FF] h-full">
            <div className="herosection  flex justify-center items-center py-20">
                <div className="w-2/4 px-3 ">
                    <div className="text-justify px-12">
                        <h1 className="text-4xl font-bold text-gray-900 mt-20 my-5" >
                            Hello , I'm
                            <div><span>A</span>M<span>A</span>N<span> Y</span>A<span>D</span>A<span>V</span>....</div></h1>
                        <p className="text-[#556070]">I'm a Freelance UI/UX Designer and Developer based in London, England. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design</p>
                    </div>
                    <div className="btn mx-12 my-6"><button className=" text-white bg-[#A53DFF] p-2 rounded-lg">Say Hello</button></div>
                </div>
                <div className="relative w-2/4 ">
                    <img src="./hero.jpg" alt="hero" className="rounded-lg w-[40%] h-[40%] mx-auto relative z-10" />
                    <div className="absolute w-[39%] h-[100%] top-[-10%] left-[35%] bg-[#1b1a1a53] rounded-lg"></div>
                </div>
            </div>
            <div className="box flex ml-20 mb-24 gap-1 w-[35%]">
                {box.map((item, index) => (
                    <div key={index} className="box px-2 bg-[#a43dff85] flex-1">
                        <h2 className="text-center font-semibold py-1">{item.h1}</h2>
                        <p className="text-sm text-center">{item.p}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Hero