import { useState, useRef, useEffect } from 'react';
import './Body.css'
import Rectanglee from '../images/Rectanglee.png'
import rectangle from '../images/rectangle.png'
import arrow from '../images/arrow.png'
import arrow2 from '../images/arrow2.png';
import phone from '../images/icons8-ringer-volume-50.png'
import mail from '../images/icons8-open-envelope-48.png'
import MyCarousel from './MyCarousel';
import { useScroll } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import contactEllipse from '../images/contactEllipse.png'


function Body() {

  useEffect(() => {
    AOS.init();
  }, []);


  const [show, setShow] = useState(false);

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



  const pStyle = {
    pointerEvents: 'none',
    position: 'absolute',
    width: '621px',
    height: '485px',
    left: '445px',
    top: '140px',
  }
  const { scrollYProgress } = useScroll();



  return (
    <div className="main-container">
      <div className='container-1'>
        <p style={pStyle} id="lds">Light defines
          spatial experience
          as it falls and reflects</p>
      </div>


      <div className='container-2'>
        <div className='section-1'>
          <p id="light"> We at Kaash<br />are fascinated about Light</p>
        
          <img src={Rectanglee} alt="img-1" className="Rectangle" />
        </div>
        <div className='section-2'>
          <p id='second'>The endless possibilities of light, inspire us to purpose its potential. With light we create comfortable spaces, inspiring institutions and playful environments. Aspiring to build healthier communities and greener planet we believe in the sustainable human centric lighting.</p>
      
          <img src={rectangle} alt="img-2" className="rectangle" />

        </div>
      </div>



      <div className="calculator">
        <h1>Calculate light carbon</h1>
        <p className="text">
          Calculate the carbon emissions of your lighting.
          Know your savings potential with cost estimate and return of investment.</p>
        <button className="Calculate">Calculate</button>
      </div>
      <div className="inspire" data-aos="slide-left" data-aos-duration="3000" data-aos-offset="100" data-aos-delay="50" data-aos-easing="ease-out" data-aos-anchor-placement="top-center">
        <h1>Inspiring Stories</h1>

      </div>

      <div className="find">
        <div className="mycar">
          <MyCarousel />
        </div>

        <div className="redtext">
          <h1>Find Your Light</h1>
          <p >
            Do you need light product or design service for your home, office or any other project. Answer these simple questions to find out the perfect light for you.
          </p>
          <Link to='/lightfinder'>
            <button className='start-btn'>Start</button>
          </Link>
        </div>
      </div>





      <div className="contact">
        <p className="story">
          Let’s create<br />
          your story
          <br />
          with <p>light</p>
        </p>

        <img src={arrow} alt="arrow" className="arrow" />
        <div className="ellipse1" >
          <img src={contactEllipse} />
        </div>
        <button className="Cbutton" onClick={() => setShow(true)}>Contact Us</button>

        {show ?
          <div ref={menuRef} className='pop'>
            <h1 className="us">
              Contact us
            </h1>
            <button className="x-Button1" onClick={() => setShow(false)}>
              ✖
            </button>
            <div className="para">
              <p>Let’s create your story
                <br />
                with <strong>light</strong>. Get in touch </p>
              <img src={arrow2} alt="arrow" className='arrow2' id='arrow2' />
              <div className='input-div'>
                <input type="text" placeholder='Contact Name' />
                <input type="text" placeholder='Address' />
                <input type="text" placeholder='Country' id='country' />
                <input type="text" placeholder='Postal Code' id='postal' />
                <input type="text" placeholder='Contact Phone' />
                <input type="text" placeholder='E-mail' />
                <input type="text" placeholder='Please leave your comment' />
              </div>
              <div className="checkbox-div">
                <input type="checkbox" />
                <p id='checkbox'>Kindly contact me for my requirement</p>
              </div>

              <button type='submit' className="submit" onClick={() => setShow(false)}>Submit</button>
            </div>


            <div className='radial'>

            </div>

            <div className="contact-footerr">
              <div className="phone">
                <div className='img-cont'>
                  <img src={phone} alt="" className='contactImg' />

                  <p>Phone</p>
                </div>
                <p>+352 691 566 820</p>
              </div>

              <div className="phone">
                <div className='img-cont'>
                  <img src={mail} alt="" className='contactImg' />
                  <p>E-mail</p>
                </div>
                <p>moien@kaash.eu</p>
              </div>

              <div className="phone">
                <div className='img-cont'>
                  <img src={mail} alt="" className='contactImg' />
                  <p>Address</p>
                </div>
                <p>41a rue des romains, L8041 Luxembourg</p>
              </div>
            </div>

          </div> : null
        }



      </div>
    </div>
  )
}

export default Body;


