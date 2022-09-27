import React from 'react'
import profile from './images/peter_avatar (1).jpg'

const Person3 = () => {
  return (
    <div>
        <div className='p3'>
            <img src={profile}  alt='pics' className='pics'/>
            <h2>UI/UX Designer</h2>
            <p>
                An International designer based in texas and has done some projects with microsoft,amazon and
                apple companies. A current head of Designs Department in Orleans

            </p>
        </div>
    </div>
  ) 
}

export default Person3