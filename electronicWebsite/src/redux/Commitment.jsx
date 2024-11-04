import React from 'react'
// import { FaInstagram, FaSitemap } from 'react-icons/fa'
// import { FaLinesLeaning } from "react-icons/fa6";

function Commitment() {
  return (
    <div className=' grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-1 
    px-8 py-10 my-5 justify-center items-center text-white bg-gray-100'>
        <div className=' bg-white text-black w-68 m-4 p-7 h-64 rounded-md hover:translate-y-5 duration-500'>
            {/* <FaInstagram/> */}
            <h1 className=' text-2xl px-3 m-2'>Continuous Learning:</h1>
            <p className=' opacity-100 m-3'>Regularly updates skills through courses, tutorials, and coding challenges to stay current with technology.</p>
        </div>
        <div className=' bg-white text-black w-68 m-4 p-7 h-64 rounded-md hover:translate-y-5 duration-500'>
            {/* <FaSitemap/> */}
            <h1 className=' text-2xl px-3 m-2'>Problem-Solving: </h1>
            <p className=' opacity-75 m-3'>Approaches challenges with persistence, debugging issues thoroughly and creatively until resolved.</p>
        </div>
        <div className=' bg-white text-black w-68 m-4 p-7 h-64 rounded-md hover:translate-y-5 duration-500'>
            {/* <FaLinesLeaning/> */}
            <h1 className=' text-2xl px-3 m-2'>Code Quality:</h1>
            <p className=' opacity-75 m-3'>Code Quality: Prioritizes writing clean, maintainable code and adheres to best practices, including thorough testing and documentation.</p>
        </div>
        <div className='  bg-white text-black w-68 m-4 p-7 h-64 rounded-md hover:translate-y-5 duration-500'>
            {/* <FaInstagram/> */}
            <h1 className=' text-2xl px-3 m-2'>Collaboration:</h1>
            <p className=' opacity-75 m-3'>Collaboration: Actively participates in code reviews and team discussions, valuing feedback and contributing to a positive team environment.</p>
        </div>
    </div>
  )
}

export default Commitment