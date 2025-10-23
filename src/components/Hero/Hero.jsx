import React from 'react'
import './Hero.css'
import instagram from '../../assets/instagram.avif'
import facebook from '../../assets/facebook.jpg'
import twitter from '../../assets/twitter.webp'


const Hero = () => {
  return (
    <div className='hero container'>
      <video 
        className="hero-video"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="/hsc.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-text">
        <h1 className="hero-title">
          <span className="title-line">Hindu Student</span>
          <span className="title-line">Council</span>
        </h1>
        <p className="hero-subtitle"> Celebrating our heritage, building our future </p>
        
        <a href="https://www.instagram.com/hsc_university" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="instagram" className="icon"/>
        </a>
        <a href="https://x.com/hsc_university" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="twitter" className="icon"/>
        </a>
        <a href="https://www.facebook.com/hindu.student.council" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="facebook" className="icon"/>
        </a>

      </div>
    </div>
  )
}
export default Hero
