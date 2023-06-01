import React from 'react'

import './crew.css'



const Crew = ({text1, text2, text3, image}) => {

  


  return (
    <div>
        <div className='crew-section'>
            <div className='crew-content'>
                <h4>{text1}</h4>
                <h3>{text2}</h3>
                <p>{text3}</p>    

            </div>

            <div className='crew-image'>
                <img src={image} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Crew
