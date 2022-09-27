import React from 'react'
import img from './images/my pic.jpg'

const Person1 = () => {


  return (
    <div>
        <div className='profile1'>
        <img src={img} alt='profile' className='p1'/>
        <h2> Full-Stack Developer</h2>
        <p>Works with Google and has earned some dignitaries as some prominent company staff.
            C.E.O Servicity, Classy~Robes
        </p>
        </div>
    </div>
  )
}

export default Person1