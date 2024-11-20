import React, { useEffect, useState } from 'react'
import { ReactTyped } from 'react-typed';

// import HeroImg from '../../public/image/HeroImg.jpg'

const Hero = () => {
  const name = 'Lukas A'
  const [index, setIndex] = useState(0);

  useEffect(()=>{
    const display = setInterval(()=>{
      if (index < name.length) {
        setIndex(previndex =>(previndex + 1) % (name.length + 1));
        
      }
    }, 1000);
    return () => clearInterval(display)
  }, [name.length])
  return (
    <div>
          <section className="bg-primary px-5 text-white py-32  grid items-center justify-center">
      <div className="container mx-auto grid md:grid-cols-2 items-center space-x-40">
        <div className="hero-info">
          <h1 className="text-4xl lg:text-6xl">Hi, I'm {name.slice(0, index)}</h1>
          <p className="py-5 font-bold md:text-2xl text-xsm"> <ReactTyped 
          strings={['A  Passionate and Hardworking Frontend Developer']}
          typeSpeed={140}
          backSpeed={10}
          loop
          /></p>
          <a href="#projects" className="btn bg-accent text-white px-6 py-3"></a>
        </div>
        <div className="hero-img rounded-full ">
          <img src="./public/image/lukas-pic.jpg" alt="Hero" className="md:w-80 rounded-full bg-gray-800 md:h-[20em] relative right-28 h-[26vh] w-[100%] " />
        </div>
      </div>
    </section>
    </div>
  )
}

export default Hero
