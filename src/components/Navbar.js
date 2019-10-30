import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <div className='navbar-wrapper'>
            {/* link to actual TopView site */}
            <div>
                <img
                  src={require('.././media/topview-nyc-coupons.png')}
                  alt='icon'
                  className='logo'
                />
            </div>

            <div className='links-wrapper'>

                {/* link to bike rentals */}
                <div className='link-item'>
                     <Link to='/rentals' className='link-text'><p>Rentals</p></Link>
                </div>

                {/* link to TopView's other packages */}
                <div className='link-item'>
                    <a href='https://www.topviewnyc.com/packages/' className='link-text'>
                        <p>Our Other Tours</p></a>
                </div>

                {/* link to TopView's about page */}
                <div className='link-item'>
                    <a href='https://www.topviewnyc.com/about' className="link-text">
                    <p>About Us</p></a>
                </div>

                {/* link to TopView's contact page */}
                <div className='link-item'>
                    <a href="https://www.topviewnyc.com/about/location" className="link-text">
                    <p>Contact</p></a>
                </div>

                {/* link to shopping cart */}
                <div className='link-item'>
                    {/* <Link to='/shopping-cart'>Shopping Cart</Link> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar