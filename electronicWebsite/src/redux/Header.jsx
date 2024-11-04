// src/components/Header.js
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiFillMoon } from "react-icons/ai";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [change, setChange] = useState("");

  // function changecolor() {
  //   if (document.body.style.background=='white') {
  //     document.body.style.background="black"
      
  // } else{
  //     document.body.style.background="white"
  // }
    
  // }

  return (
    <header className="flex justify-between items-center px-5 py-4 bg-primary 
    text-white fixed w-full z-10 bg-gray-700 md:bg-gray-500">
    <a href="/" className="logo text-2xl font-bold text-accent">My Portfolio</a>
    <div className={`${change? 'bg-red-500' : 'bg-blue-400'}`}>
      
      <AiFillMoon onClick={()=>setChange(!change)}/>
      
    </div>
    <nav className={`md:flex md:items-center md:static absolute w-full md:w-auto bg-primary 
      transition-all duration-300 ease-in-out ${toggle ? 'top-16' : 'top-[-200px]'}`}>
      <ul className="flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-4 px-5 md:px-0 font-bold">
        <li><a href="#about" className="hover:text-accent">About</a></li>
        <li><a href="#projects" className="hover:text-accent">Projects</a></li>
        <li><a href="#blog" className="hover:text-accent">Blog</a></li>
        <li><a href="#contact" className="hover:text-accent">Contact</a></li>
      </ul>
    </nav>
    <button onClick={() => setToggle(!toggle)} className="block md:hidden">
      {toggle ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
    </button>
  </header>
  );
};

export default Header;