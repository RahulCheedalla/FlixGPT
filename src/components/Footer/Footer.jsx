import React from 'react'
import './Footer.css'
import instagram_icon from '../../assets/assets/instagram_icon.png'
import twitter_icon from '../../assets/assets/twitter_icon.png'
import youtube_icon from '../../assets/assets/youtube_icon.png'
import facebook_icon from '../../assets/assets/facebook_icon.png'


const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-icons'>
        <img src={instagram_icon} alt=""/>
        <img src={twitter_icon} alt=""/>
        <img src={youtube_icon} alt=""/>
        <img src={facebook_icon} alt=""/>
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Inverstor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notice</li>
        <li>Cookie Performance</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>@2003 to 2025 Netflix Rights</p>
    </div>
  )
}

export default Footer
