import React from 'react'
import {ReactTyped} from 'react-typed'

const Lukako = () => {
  return (
    <div className='bg-gradient-to-r from-green-400 to-blue-500 text-2xl text-clip'>
      <ReactTyped
      strings={['bts', 'bts', 'sass']}
      typeSpeed={40}
      backSpeed={40}
      loop
      />
    </div>
  )
}

export default Lukako
