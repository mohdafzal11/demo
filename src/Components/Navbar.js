import { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import Ellipse13 from '../images/Ellipse13.png'
import Hamburger from 'hamburger-react';

const Navbar = () => {
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
    <nav className='nav'>
      <div className="logo">
        <Link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" id='logo' viewBox="0 0 103 51" fill="none">
            <path d="M25.7876 25.2161C25.7876 24.9278 25.7876 24.5438 25.7876 24.2916C25.7876 16.445 25.7876 8.63943 25.7876 0.7929C25.7876 0.576654 25.7876 0.360409 25.7876 0C27.2157 0.0723138 28.6154 0.0954571 30.0163 0.219837C40.721 1.16281 49.5125 5.84584 57.0085 13.0107C59.5121 15.3999 61.9254 17.8788 64.4321 20.2652C66.746 22.4664 69.3039 24.3437 72.6391 24.8441C74.1215 25.0668 75.6384 25.072 77.2126 25.072V49.992C75.9563 49.992 74.6848 50.0209 73.4195 49.9688C64.396 49.5379 56.5234 46.3444 49.8198 40.6114C46.7226 37.9589 43.8995 35.0115 40.968 32.1825C38.3679 29.6718 35.7136 27.2304 32.1555 25.9837C30.1097 25.2693 27.9615 25.2161 25.7876 25.2161Z" fill="#FF4700" />
            <path d="M103 0V25.072H77.2124V0H103Z" fill="#FF4700" />
            <path d="M25.7875 25.2158V50.1438H0V25.2158H25.7875Z" fill="#FF4700" />
          </svg>
        </Link>
      </div>
      <div className="linkcontainer">
        <ul className="nav-links">
          <li><button id='menu' onClick={toggleMenu}><Hamburger /></button></li>
          {isOpen && (
            <div ref={menuRef} className='links'>
              <img id='Ellipse13' src={Ellipse13} alt="Ellipse13" />
              <ul>
                <li className='sub-links' onClick={() => handleItemClick('Talk')}>Talk</li>
                <li className='sub-links' onClick={() => handleItemClick('About')}>About</li>
                <li className='sub-links' onClick={() => handleItemClick('Light')}>Light</li>
                <li className='sub-links' onClick={() => handleItemClick('Calculator')}>Calculator</li>
                <li className='sub-links' onClick={() => handleItemClick('Light Finder')}>Light Finder</li>
                <Link to='/contact'>
                  <li className='sub-links' onClick={() => handleItemClick('Contact Us')}>Contact Us</li>
                </Link>
              </ul>
              {selectedItem && selectedItem === 'Talk' && (
                <ul className='sub-talk'>
                  <li><Link to="/whatwedo">What we do?</Link></li>

                  <li><Link to="/ourprojects">Our Projects</Link></li>

                </ul>

              )}
              {selectedItem && selectedItem === 'About' && (
                <ul className='sub-about'>
                  <li><Link to="/whoarewe">Who are we?</Link></li>
                  <li><Link to="/whatwebelieve">What we believe?</Link></li>
                </ul>
              )}
              {selectedItem && selectedItem === 'Light' && (
                <ul className='sub-light'>
                  <li><Link to="/lightschool">Light School</Link></li>
                  <li><Link to="/articles">Articles</Link></li>
                </ul>
              )}
              {selectedItem && selectedItem === 'Calculator' && (
                <ul className='sub-calc'>
                  <li><Link to="/carbonemission">Calculate Carbon Emission</Link></li>
                </ul>
              )}
              {selectedItem && selectedItem === 'Light Finder' && (
                <ul className='sub-finder'>
                  <li><Link to="/lightfinder">Find your perfect light</Link></li>
                </ul>
              )}
            </div>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;