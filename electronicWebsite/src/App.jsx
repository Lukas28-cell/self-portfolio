import React from 'react'
import Header from './redux/Header'
import Hero from './redux/Hero'
import About from './redux/About'
import Projects from './redux/Project'
import Blog from './redux/Blog'
import Contact from './redux/Contact'
import Footer from './redux/Footer'
import Commitment from './redux/Commitment'

const App = () => {
  return (
    <div className=' bg-slate-600 h-screen'>
    
      <Header/>
      
      <Hero/>
      <About/>
      <Projects/>
      <Commitment/>
      <Blog/>
      <Contact/>
      <Footer/>
   
    </div>
  )
}

export default App