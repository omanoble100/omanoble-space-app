import React, { useState } from 'react'
import './destination.css'
import Space from './Space'

import image1 from '../../assets/destination/image-moon.webp'
import image2 from '../../assets/destination/image-mars.webp'
import image3 from '../../assets/destination/image-europa.webp'
import image4 from '../../assets/destination/image-titan.webp'

const Destination = () => {

  const [display, setDisplay] = useState('moon');

 
  return (
    <div className='space__destination-section'>
        <h2><span>01</span> pick your destination</h2>
              <div className="destination-section-links">
                    <p 
                    className={display === 'moon' ? 'border-bottom' : ''} 
                    onClick={() => {
                      setDisplay('moon')
                      }}>Moon</p>

                    <p 
                     className={display === 'mars' ? 'border-bottom' : ''} 
                    onClick={() => setDisplay('mars')}>Mars</p>

                    <p 
                     className={display === 'europa' ? 'border-bottom' : ''} 
                    onClick={() => setDisplay('europa')}>Europa</p>
                    
                    <p 
                     className={display === 'titan' ? 'border-bottom' : ''} 
                    onClick={() => setDisplay('titan')}>Titan</p>
                </div>

         { display === 'moon' &&
              <Space 
                      display= {display}
                      text = 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.'
                      image= {image1}
                      text2='384,400 KM'
                      text3='3 DAYS'
              />
         }

         { display === 'mars' &&
              <Space 
                      display= {display}
                      text = 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!'
                      image= {image2}
                      text2='225 MIL. KM'
                      text3='9 MONTHS'
              />
         }

         { display === 'europa' &&
              <Space 
                      display= {display}
                      text = 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.'
                      image= {image3}
                      text2='628 MIL. KM'
                      text3='3 YEARS'
              />
         }

         { display === 'titan' &&
              <Space 
                      display= {display}
                      text = 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.'
                      image= {image4}
                      text2='1.6 BIL. KM'
                      text3='7 YEARS'
              />
         }
    </div>
  )
}

export default Destination
