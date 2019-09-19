import React from 'react'

const Navbar = () => {
    return(
        <div className="navbar-wrapper">
            <div>
                <img
                  src={require(".././media/topview-nyc-coupons.png")}
                  alt="icon"
                  className="logo"
                />
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
                <a href="https://www.topviewnyc.com/about" className="link-text">
                  <p>About Us</p>
                </a>
              </div>
              <div className="link-item">
                <a href="https://www.topviewnyc.com/about/location" className="link-text">
                  <p>Contact</p>
                </a>
              </div>
            </div>
        </div>
    )
}

export default Navbar