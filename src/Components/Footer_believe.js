import React from 'react';
import { useState, useRef, useEffect } from 'react';
import './Footer_believe.css';
import FooterLogo from '../images/footer-logo.png';
import linkedIn from '../images/linkedIn.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import EU from '../images/EU.png';
import federation from '../images/federation.png';
import vector from '../images/Vector.png';
import daVinci from'../images/daVinci.png'
import luxinnovation from'../images/luxinnovation.png'
import { Link } from "react-router-dom";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const menuRef = useRef(null);
  
    const toggleMenu = (event) => {
        event.stopPropagation();
        setIsOpen(!isOpen);
    };
  
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
        setSelectedItem(null);
      }
    };
  
    const handleItemClick = (item) => {
      setSelectedItem(item);
    };
  
    useEffect(() => {
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, []);
  return (
    <div className='footerhome'>
        {/* <a href="/"><img id='footer-logo' src={FooterLogo} alt="logo" /></a> */}
        <Link to="/"><img id='footer-logo' src={FooterLogo} alt="logo" /></Link>
        <div className='social-container'> 
          <a href="https://www.facebook.com/profile.php?id=100081159132820"><img id='facebook' src={facebook} alt="facebook" /></a>
          <a href="https://www.linkedin.com/company/kaash/"><img id='linkedIn' src={linkedIn} alt="linkedIn" /></a>
          <a href="https://www.instagram.com/kaash.eu/"><img id='instagram' src={instagram} alt="instagram" /></a>
        </div>
        <p id='copyright'>Copyright © 2023 Kaash® | Luxembourg</p>

        <div className='links-container'>
          <h3>Quick Links</h3>
          
          {/* <a className='quick-links' href={<Services />}>Services</a> */}
          <Link to="/contact" className='quick-links'>Contact</Link>
          {/* <p className='quick-links'>Contact</p> */}

          <Link to="/whatWeDo" className='quick-links'>Services</Link>

          {/* <p className='quick-links'>Projects</p> */}
          <Link to="/ourprojects" className='quick-links'>Projects</Link>

          {/* <p className='quick-links'>Company</p> */}
          <Link to="/whoarewe" className='quick-links'>Company</Link>

          {/* <p className='quick-links'>Light Finder</p> */}
          <Link to="/lightfinder" className='quick-links'>Light Finder</Link>
          
          {/* <p className='quick-links'>Light Calculator</p> */}
          <Link to="/lightcalculator" className='quick-links'>Light Calculator</Link>
        </div>

        <div className='img-container'>
          <img id='eu' src={EU} alt="eu" />
          <img id='daVinci' src={daVinci} alt="daVinci" />
          <img id='fed' src={federation} alt="federation" />
          <img id='luxinnovation' src={luxinnovation} alt="luxinnovation" />
        </div>

        <div className='subscribe-container'>
          <p id='subscribe'>Subscribe</p>
          <input type="email" name="email" id="email" placeholder='Your mail'/>
          <img id='arrow' src={vector} alt="arrow" />
          <p id='privacy'>By signing up to receive emails from Motto, you agree to our Privacy Policy. We treat your info responsibly. Unsubscribe anytime.</p>
        </div>
    </div>
  )
}

export default Footer;