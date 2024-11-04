import React from 'react'
import { FaInstagram, FaSitemap } from 'react-icons/fa'

function Commitment() {
  return (
    <div className=' grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-1 
    px-8 py-10 my-5 justify-center items-center text-white'>
        <div className=' bg-blue-950 w-68 m-4 p-7 h-64 rounded-md hover:translate-y-5 duration-500'>
            <FaInstagram/>
            <h1 className=' text-2xl px-3 m-2'>Dedication</h1>
            <p className=' opacity-55 m-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, sit. Illo aperiam autem voluptate possimus.</p>
        </div>
        <div className=' bg-blue-950 w-68 m-4 p-7 h-64 rounded-md hover:translate-y-5 duration-500'>
            <FaSitemap/>
            <h1 className=' text-2xl px-3 m-2'>Dedication</h1>
            <p className=' opacity-55 m-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis necessitatibus consequatur pariatur, reprehenderit blanditiis alias.</p>
        </div>
        <div className=' bg-blue-950 w-68 m-4 p-7 h-64 rounded-md hover:translate-y-5 duration-500'>
            <FaInstagram/>
            <h1 className=' text-2xl px-3 m-2'>Dedication</h1>
            <p className=' opacity-55 m-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis necessitatibus consequatur pariatur, reprehenderit blanditiis alias.</p>
        </div>
        <div className=' bg-blue-950 w-68 m-4 p-7 h-64 rounded-md hover:translate-y-5 duration-500'>
            <FaInstagram/>
            <h1 className=' text-2xl px-3 m-2'>Dedication</h1>
            <p className=' opacity-55 m-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis necessitatibus consequatur pariatur, reprehenderit blanditiis alias.</p>
        </div>
    </div>
  )
}

export default Commitment