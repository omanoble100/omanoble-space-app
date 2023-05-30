import React from 'react'
import './destination.css'

const Space = ({image, display, text, text2, text3}) => {
  return (
    <div>
      <div className="destination-section">
              <div className="destination-section__img">
                  <img src={image} alt="" />
              </div>
              <div className="destination-section__content">
                <div className="destination-section__content-item">
                          
                  <div className="destination-link-content">
                    <h1>{display}</h1>
                    <p>{text}</p>

                    <div className="line">  </div>

                    <div className="information-section">
                        <div>
                          <p> AVG Distance</p>
                          <h6>{text2}</h6>
                        </div>
                        <div >
                          <p> EST. Travel time</p>
                          <h6>{text3}</h6>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
    </div>
  )
}

export default Space
