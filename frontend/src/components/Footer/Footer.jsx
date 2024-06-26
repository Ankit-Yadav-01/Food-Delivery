import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quod, nisi earum reiciendis expedita ea voluptas est nam in. Non unde necessitatibus amet voluptatibus pariatur excepturi corrupti quisquam, ducimus vero.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" /><img src={assets.twitter_icon} alt="" /><img src={assets.linkedin_icon} alt="" />
                </div>
                
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Contact Us</h2>
                <ul>
                    <li>+22-233-455-0098</li>
                    <li>contactus@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p>&copy; Tomato All rights reserved.</p>

    </div>
  )
}

export default Footer