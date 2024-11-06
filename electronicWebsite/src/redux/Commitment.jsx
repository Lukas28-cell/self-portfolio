import React from 'react'
import { FaLinesLeaning } from "react-icons/fa6";
import { MdSyncProblem, MdHighQuality } from "react-icons/md";
import { FcCollaboration } from "react-icons/fc";


function Commitment() {
  return (
    <div className='px-8 py-10 my-5 justify-center 
    items-center text-white bg-gray-100'>
        <div>
            <h2 className="text-3xl font-bold text-center 
            mb-8 text-blue-400">Dedication</h2>
        </div>
        <div className=' grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-1'>
        <div className=' bg-white text-black w-68 m-4 p-7 h-64 
        rounded-md hover:translate-y-5 duration-500'>
        <FaLinesLeaning className=' text-3xl'/>
            <h1 className=' text-2xl px-3 m-2 font-bold'>Continuous Learning:</h1>
            <p className=' opacity-100 m-3'>Regularly updates skills through courses, 
                tutorials, and coding challenges to stay current with technology.</p>
        </div>
        <div className=' bg-white text-black w-68 m-4 p-7 h-64 
        rounded-md hover:translate-y-5 duration-500'>
        <MdSyncProblem className=' text-3xl'/>
            <h1 className=' text-2xl px-3 m-2 font-bold'>Problem-Solving: </h1>
            <p className=' opacity-100 m-3'>Approaches challenges with persistence, 
                debugging issues thoroughly and creatively until resolved.</p>
        </div>
        <div className=' bg-white text-black w-68 m-4 p-7 h-64 
        rounded-md hover:translate-y-5 duration-500'>
            <MdHighQuality className=' text-3xl'/>
            <h1 className=' text-2xl px-3 m-2 font-bold'>Code Quality:</h1>
            <p className=' opacity-100 m-3'>Code Quality: Prioritizes writing 
                clean, maintainable code and adheres to best practices, 
                including thorough testing and documentation.</p>
        </div>
        <div className='  bg-white text-black w-68 m-4 p-7 h-64 
        rounded-md hover:translate-y-5 duration-500'>
        <FcCollaboration className=' text-3xl'/>
            <h1 className=' text-2xl px-3 m-2 font-bold'>Collaboration:</h1>
            <p className=' opacity-100 m-3'>Collaboration: Actively participates 
                in code reviews and team discussions, valuing feedback and contributing 
                to a positive team environment.</p>
        </div>
        </div>
    
    </div>
  )
}

export default Commitment