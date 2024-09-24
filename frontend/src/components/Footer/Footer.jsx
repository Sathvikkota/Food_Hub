import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita cupiditate, corporis veritatis velit natus distinctio rem accusantium iure tempore iusto! Porro, quasi? Repellat commodi vel, quidem aperiam obcaecati natus facilis?</p>
                <div className="footer-social-items">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+1-222-333-444</li>
                    <li>contact@foodgenie.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">copyright &copy; 2024- All Rights Reserved</p>
    </div>
  )
}

export default Footer
