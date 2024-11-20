import React from 'react'
import Header from './redux/Header'
import Hero from './redux/Hero'
import About from './redux/About'
import Projects from './redux/Project'
import Blog from './redux/Blog'
import Contact from './redux/Contact'
import Footer from './redux/Footer'
import Commitment from './redux/Commitment'
import './App.css'
import Lukako from './redux/Lukako'

const App = () => {
  return (
    <div className=' bg-gray-400 h-screen'>
    
      <Header/>
      
      <Hero/>
      <About/>
      <Projects/>
      <Commitment/>
      <Blog/>
      <Contact/>
      <Lukako/>
      <Footer/>
   
    </div>
  )
}

export default App
