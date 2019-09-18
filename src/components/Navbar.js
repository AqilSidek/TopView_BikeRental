import React from 'react'
import { BrowserRouter as Router, Link as Hyperlink, Route } from 'react-router-dom'
import About from './About.js'
import Contact from './Contact.js'

function AboutUs() {
    return <About />;
  }
  
  function ContactUs() {
    return <Contact />;
  }

const Navbar = () => {
    return(
        <div className="navbar-wrapper">
          <Router>
            <div>
              <Hyperlink to="/">
                <img
                  src={require(".././media/topview-nyc-coupons.png")}
                  alt="icon"
                  className="logo"
                />
              </Hyperlink>
            </div>
            <div className="links-wrapper">
              <div className="link-item">
                <a
                  href="https://www.topviewnyc.com/packages/"
                  className="link-text"
                >
                  <p>Our Other Tours</p>
                </a>
              </div>
              <div className="link-item">
                <Hyperlink to="/about/" className="link-text">
                  <p>About Us</p>
                </Hyperlink>
              </div>
              <div className="link-item">
                <Hyperlink to="/contact/" className="link-text">
                  <p>Contact</p>
                </Hyperlink>
              </div>

              <Route path="/about/" component={AboutUs} />
              <Route path="/contact/" component={ContactUs} />
            </div>
          </Router>
        </div>
    )
}

export default Navbar