import React from 'react'
import HeroImg from '../../public/image/HeroImg.jpg'

const Hero = () => {
  return (
    <div>
          <section className="bg-primary px-5 text-white py-32  grid items-center justify-center">
      <div className="container mx-auto grid md:grid-cols-2 items-center space-x-40">
        <div className="hero-info">
          <h1 className="text-4xl lg:text-6xl">Hi, I'm Lukas A</h1>
          <p className="py-5 font-bold md:text-2xl text-xsm">I am a  Passionate and Hardworking Frontend Developer.</p>
          <a href="#projects" className="btn bg-accent text-white px-6 py-3"></a>
        </div>
        <div className="hero-img rounded-full ">
          <img src={HeroImg} alt="Hero" className="md:w-80 rounded-full md:h-[20em] relative right-28 h-[26vh] w-[100%] " />
        </div>
      </div>
    </section>
    </div>
  )
}

export default Hero
