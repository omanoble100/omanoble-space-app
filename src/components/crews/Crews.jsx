import React, { useState } from 'react'

import './crew.css'
import Crew  from './Crew'

import image1 from '../../assets/crew/image-douglas-hurley.png'
import image2 from '../../assets/crew/image-mark-shuttleworth.png'
import image3 from '../../assets/crew/image-victor-glover.png'
import image4 from '../../assets/crew/image-anousheh-ansari.png'

const Crews = () => {

    const [crew, setCrew] = useState('commander')
    
  return (
    <div className='space__crew'>

        <div className='space__crew-section'>
            <h2><span>02</span> Meet the crew</h2>


           {crew === 'commander' && 
                    <Crew 
                    text1='Commander' 
                    text2='Douglas Hurley' 
                    text3='Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.' 
                    image={image1}
                
                />
           
           }     
           {crew === 'mission' && 
                    <Crew 
                    text1='Mission Specialist' 
                    text2='Mark Shuttleworth' 
                    text3='Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.' 
                    image={image2}
                
                />
           
           }     
              
           {crew === 'pilot' && 
                    <Crew 
                    text1='Pilot' 
                    text2='Victor Glover' 
                    text3='Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ' 
                    image={image3}
                
                />
           
           }  

           {crew === 'engineer' && 
                    <Crew 
                    text1='Flight Engineer' 
                    text2='Anousheh Ansari' 
                    text3='Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ' 
                    image={image4}
                
                />
           
           }     


            <div className='crew-section-links'>
                    <div className= {crew === 'commander' ? 'whitebackground ' : 'circle'} onClick={() => setCrew('commander')} >

                    </div>
                    <div className= {crew === 'mission' ? 'whitebackground ' : 'circle'} onClick={() => setCrew('mission')}>

                    </div>
                    <div className= {crew === 'pilot' ? 'whitebackground ' : 'circle'} onClick={() => setCrew('pilot')}>

                    </div>
                    <div className= {crew === 'engineer' ? 'whitebackground ' : 'circle'} onClick={() => setCrew('engineer')}>

                    </div>
                </div>

        </div>

       

        
      
    </div>
  )
}

export default Crews
