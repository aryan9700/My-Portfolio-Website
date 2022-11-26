import React from 'react'
import './footer.css'
import {FaYoutube} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaSnapchat} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
    <a href='#' className='footer__logo'>Aryan</a>
    <ul className='permalinks'>
      <li><a href='#about'>About</a></li>
      <li><a href='#experience'>Experience</a></li>
      <li><a href='#services'>Services</a></li>
      <li><a href='#portfolio'>Portfolio</a></li>
      <li><a href='#testimonials'>Testimonials</a></li>
      <li><a href='#contact'>Contact</a></li>
    </ul>
    <div className='footer__socials'>
   
    <a href ="https://youtube.com"> <FaYoutube/></a>
    <a href ="https://twitter.com"> <FaTwitter/></a>
    <a href ="https://snapchat.com"> <FaSnapchat/></a>

    </div>
    <div className='footer__copyright'>
    <small>&copy; ARYAN HAI KYA. All rights reserved.</small>

    </div>
    </footer>
  )
}

export default Footer