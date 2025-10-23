import React from 'react';
import './Footer.css';
import instagram from '../../assets/instagram.avif'
import facebook from '../../assets/facebook.jpg'
import twitter from '../../assets/twitter.webp'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section links">
        <h3>Quick Links</h3>
          <ul>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/student-clubs">Student Clubs</Link></li>
          <li><Link to="/forms-documents">Forms & Documents</Link></li>
          <li><Link to="/contact">Contact us</Link></li>
          </ul>
        </div>
        <div className="footer-section social">
          <h3 className='pixel'>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/cepssc" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" className="icon-2"/>
            </a>
            <a href="https://x.com/uofgcepssc" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Twitter" className="icon-2"/>
            </a>
            <a href="https://www.facebook.com/CEPSSC/" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" className="icon-2"/>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; Made by <a className='pranay' href='https://www.pranayharpalani.com' target='_blank'>Pranay Harpalani</a> | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
