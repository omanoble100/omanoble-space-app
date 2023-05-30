import React from 'react'
import './home.css'

const Home = () => {
  return (
    <div className='space__home-section'>
        <div className="home-section">
            <div className="home-section__title">
                <h3>SO, You Want to travel to</h3>
                <h1>SPACE</h1>
                <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>
            <div className="home-section__content">
              <div className="home-section__content-item">
                <button>Explore</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Home
