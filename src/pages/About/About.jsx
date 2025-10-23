import React from 'react'
import './About.css'
import summitlady from '../../assets/summit-lady.png'


const About = () => {
  return (
    <>
    <div className='about'>
        <div className="about-left">
            <h2> ABOUT HINDU STUDENT COUNCIL </h2>
            <p> The Hindu Students’ Council at the University of Guelph aims to create a welcoming and inclusive
space for students to explore, celebrate, and share the Hindu religion, culture, practices, and
traditions. Our mission is to foster a strong sense of community grounded in mutual respect,
learning, and spirituality. Through educational, cultural, and service-oriented events, we strive to
promote understanding of Hindu values and encourage holistic personal growth among Hindu
students on campus. </p>
        </div>
        <div className="about-right">
            <img src={summitlady} alt="hindu-student-council" className='about-img'/>
        </div>
    </div>
    <div className='about-2'>
        <div className="mission-vision">
            <div className="mission">
                <h3>Our Mission</h3>
                <p>To create an inclusive community that celebrates Hindu culture and 
                values while promoting spiritual growth, cultural awareness, and 
                service to the university and broader community.</p>
            </div>
            <div className="vision">
                <h3>Our Vision</h3>
                <p>A campus where Hindu students feel empowered to share their heritage, 
                where cultural diversity is celebrated, and where ancient wisdom guides 
                modern student life and community engagement.</p>
            </div>
        </div>
        <div className="values-section">
            <h3>Our Core Values</h3>
            <div className="values-grid">
                <div className="value-item">
                    <h4>Cultural Heritage</h4>
                    <p>Preserving and celebrating the rich traditions of Hindu culture</p>
                </div>
                <div className="value-item">
                    <h4>Community</h4>
                    <p>Building strong bonds among students through shared values and service</p>
                </div>
                <div className="value-item">
                    <h4>Dharma</h4>
                    <p>Living with righteousness, truth, and moral principles</p>
                </div>
                <div className="value-item">
                    <h4>Unity in Diversity</h4>
                    <p>Embracing different paths while celebrating our common heritage</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About
