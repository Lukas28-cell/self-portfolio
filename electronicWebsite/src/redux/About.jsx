// src/components/About.js
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-400">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
     <div className="flex flex-col md:flex-row items-center  ">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="./public/image/lukas-pic2.jpg" // Replace with your image URL
              alt="About Me"
              className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
            />
               <div className="line1 flex md:left-[8em] font-bold text-black">
            <span className=" text-sky-900">html</span>
            <button className="b1 md:w-[74%] w-[17em]"></button>
            <span  className=" text-sky-900">css</span>
            <button className="b2 md:w-[74%] w-[17em]"></button>
            <span  className=" text-sky-900">javascript</span>
            <button className="b3 md:w-[74%] w-[17em]"></button>
            <span  className=" text-sky-900">React</span>
            <button className="b4 md:w-[74%] w-[17em]"></button>
            </div>
          </div>
               
          <div className="md:w-1/2 md:pl-10 text-white pl-2 mt-52">
            <h3 className="text-2xl font-semibold mb-4">Hello!</h3>
            <p className="mb-4 text">
              I am a passionate Frontend Developer with experience in building
              responsive and user-friendly web applications. I love to create
              beautiful and functional interfaces that provide a great user
              experience.
            </p>
            <p className="mb-4">
              My journey in web development started with a curiosity for how
              things work. I enjoy learning new technologies and keeping up with
              the latest trends in the industry.
            </p>
            <p>
              In my free time, I like to work on personal projects, contribute
              to open-source, and write about my experiences in tech. Let's
              connect and build something amazing together!
            </p>
            <hr />
            <nav className=' space-y-3 text-2xl text-white text-opacity-65 font-semibold'>
        <li className=' flex md:gap-24 gap-16'>Name:<span>Lukas A</span></li>
        <li className=' flex md:gap-28 gap-20'>Age:<span>23 Years</span></li>
        <li className=' flex md:gap-[2em] gap-2 '>Occupation:<span>Web Developer</span></li>
        <li className=' flex md:gap-24 gap-10 '>Phone:<span>+2349025840337</span></li>
        <li className=' flex md:gap-24 gap-10 '>Email:<span>lukakoinaede@gmail.com</span></li>
        <li className=' flex md:gap-20 gap-7'>Nationality:<span>Nigeria</span></li>
       </nav>
          </div>
     </div>
      </div>
      <h1 className=' md:text-9xl  text-blue text-opacity-70 text-6xl'> <marquee behavior="" direction="right"> A SENIOR WEBSITE DEVELOPER FROM NIGERIA *</marquee> </h1>
      <h1 className='md:text-9xl  text-opacity-45 text-6xl'> <marquee behavior="" direction="left"> I'M OPEN FOR NEW PROJECTS * LET'S WORK TOGETHER</marquee></h1>
    
    </section>
  );
};

export default About;