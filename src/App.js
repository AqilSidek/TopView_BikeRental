// libaries
import React from 'react'
import LazyLoad from 'react-lazy-load'
import Fade from 'react-reveal'

// CSS
import './App.css'
import './components/Navbar.css'
import './components/recommendations/Recommendations.css'

// components
import Navbar from './components/Navbar.js'
import BrooklynBridge from './components/recommendations/BrooklynBridge.js'
import WashingtonSquarePark from './components/recommendations/WashingtonSquarePark.js'
import TimesSquare from './components/recommendations/TimesSquare.js'

function App() {
  return (
    <div className="App">
      <LazyLoad>
        <Fade down>
          <div><Navbar /></div>
        </Fade>
      </LazyLoad>

      <LazyLoad>
        <Fade>
          {/* landing page */}
          <div className='landing-page'>
            {/* landing page text */}
            <Fade left>
              <div className="headertext">
                <h1>
                  Explore<br />
                  the Big Apple<br />
                  by bike!
                </h1>
              </div>
            </Fade>
          </div>

          <h2 className='rec-hdr'>Our favorites in New York</h2>
          <div className='recommendation-wrapper'>
            <div><BrooklynBridge /></div>
            <div><WashingtonSquarePark /></div>
            <div><TimesSquare /></div>
          </div>
          
          </Fade>
          </LazyLoad>
    </div>
  );
}

export default App;
