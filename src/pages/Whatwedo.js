import React from "react";
import { useState, useRef, useEffect } from 'react';
import vector from '../images/Vector_(1).png'
import "./whatwedo.css";
// import Neoncursor from "../Components/Neoncursor";
import arrow2 from '../images/arrow2.png';
import phoneImg from '../images/phone.jpeg';
import phone from '../images/icons8-ringer-volume-50.png'
import mail from '../images/icons8-open-envelope-48.png'
import mailImg from '../images/mail.jpeg';
import yellow from "../images/Yellow.png"
import Navbar from '../Components/Navbar'
import Foooter from "../Components/Foooterwhat";
import Allipse from "../images/Ellipse144.png"
import VectorLeft from "../images/VectorLeft.png";
import { eventWrapper } from "@testing-library/user-event/dist/utils";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Whatwedo () {

  useEffect(() => {
    AOS.init();
  }, []);

  const [contact, setContact] = useState(false);

  const [show, setShow] = useState(false);

  const [showw, setShoww] = useState(false);

  const [showww, setShowww] = useState(false);

  const [showwww, setShowwww] = useState(false);

  const [showwwww, setShowwwww] = useState(false);

  const [showwwwww, setShowwwwww] = useState(false);


  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const menuRef = useRef(null);

  const [isOpen1, setIsOpen1] = useState(false);
  const [selectedItem1, setSelectedItem1] = useState(null);
  const menuRef1 = useRef(null);

  const toggleMenu = (event) => {
      event.stopPropagation();
      setIsOpen(!isOpen);
  };

  const humanCentric = (event) => {
      event.stopPropagation();
      setIsOpen1(!isOpen1);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
      setSelectedItem(null);
    }
  };

  const handleClickOutside1 = (event) => {
    if (menuRef1.current && !menuRef1.current.contains(event.target)) {
      setIsOpen1(false);
      setSelectedItem1(null);
    }
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleItemClick1 = (item) => {
    setSelectedItem1(item);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, );

  useEffect(() => {
    document.addEventListener('click', handleClickOutside1);
    return () => {
      document.removeEventListener('click', handleClickOutside1);
    };
  }, );





  return(
    <>
    <div className="navbar-items">
    {/* <Neoncursor/> */}
    <Navbar/>
    <div className="whole-content">
    </div>
    <div className="talk-services">
      <div className="div">
        <div className="overlap">
          <div className="overlap-group">
            <div className="overlap-group-2">
              {/* <img className="fondo" alt="Fondo" src="{fondo}" /> */}
              <div className="box">
                <img className="Allipse" alt="Ellipse" src={Allipse} />
              </div>
              
              <div className="rectangle" />
              <div className="rectangle-2" />
              <p className="we-use-light-to">
                <span className="span">
                  We use light to create spaces where people feel good. Using full potential of light we build
                  comfortable homes, inspiring institutions and playful environments. Working towards sustainable human
                  centric solutions, we help our clients find the perfect light for their project. <br />
                  <br />
                  From heritage buildings to modern offices we fuse intelligent technology with efficient solutions for
                  a greener planet.
                </span>
              </p>
              <div className="rectangle-3" />
              <div className="text-wrapper-2">Light engineering</div>
              <div className="text-wrapper-3">Sustainable spaces</div>
              <div className="text-wrapper-4">Human centric design</div>
              {/* <Navbar className="nav-bar-instance" logoLogo="logo-2.svg" /> */}
              <div className="what-we-do" data-aos="slide-left" data-aos-duration="2000" data-aos-offset="0" data-aos-delay="100" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-center">What we do?</div>
              <div className="text-wrapper-6">Our services</div>

               

              <button className="vector" id="human-btn" onClick={()=>setShow(true)}>
                <img  classname="vector" src={vector} alt="button" />
              </button>

              <img className="img" alt="button" src={vector} onClick={()=>setShoww(true)} />

              <img className="vector-2" alt="button" src={vector} onClick={()=>setShowww(true)} />


              <div className="rectangle-4" />
              <div className="rectangle-5" />
              <div className="rectangle-6" />
              <div className="text-wrapper-8">Individual project</div>
              <div className="text-wrapper-7">Public and private company</div>
              <div className="architects-engineers">Architects &amp; Engineers</div>

              <img className="vector-3" alt="Vector" src={vector} onClick={()=>setShowwww(true)} />
              
              <img className="vector-4" alt="Vector" src={vector} onClick={()=>setShowwwww(true)}/>
              
              <img className="vector-5" alt="Vector" src={vector} onClick={()=>setShowwwwww(true)}/>
              
              <p className="do-you-have-light-a">Do you have light a project ?&nbsp;&nbsp;Click for pricing.</p>
              {/* <Button className="button-instance" property1="default" onClick={toggleMenu} /> */}
              <button className="button-instance" onClick={()=>setContact(true)}>Contact Us</button>
            </div>

          </div>
          <div className="text-wrapper-9">Technology</div>
        </div>
        <div className="overlap-2">
          <img className="vector-6" alt="Vector" src="vector.svg" />
          <img className="vector-7" alt="Vector" src="vector-5.svg" />
        </div>
        <img className="vector-8" alt="Vector" src="vector-9.svg" />
        <img className="vector-9" alt="Vector" src="vector-10.svg" />
        <img className="vector-10" alt="Vector" src="vector-11.svg" />
      </div>
    </div>   

    {/* Human-centric design */}
    { show? 
    <div className="human-centric">
      <div className="human-flex">
        <h1>Human-centric design</h1>
        <button className="x-Button1" onClick={()=>setShow(false)}>
          ✖
        </button>
      </div>
        <div className="human-content">
            <p className="para1">Creating lighting solutions specific to your needs. With user centred design approach we optimise space use, promote user well-being, and enhance overall experience with light.</p>
            <p className="para2">Deliverables<br/>
                Light visuals <br/>
                Light study<br/>
                Tender document<br/>
                Construction drawings</p>
        </div>
      </div>:null
    }

    {/* Sustainable Process */}
    { showw? 
    <div className="human-centric">
      <div className="human-flex">
        <h1>Sustainable Process</h1>
        <button className="x-Button2" onClick={()=>setShoww(false)}>
          ✖
          </button>
      </div>
        <div className="human-content">
            <p className="para1">Improving efficiency of your infrastructure, either a building or a city. With detailed light study we implement sustainable solutions to improve your energy efficiency and reduce carbon footprint.</p>
            <p className="para2">Deliverables<br/>
              Light audit<br/>
              Energy report<br/>
              Carbon reduction<br/>
              Project management<br/>
              Before & After assessment</p>
        </div>
      </div>:null
    }

    {/* Light engineering */}
    { showww? 
    <div className="human-centric">
      <div className="human-flex">
        <h1 id="light-eng">Light engineering</h1>
        <button className="x-Button3" onClick={()=>setShowww(false)}>
          ✖
          </button>
      </div>
        <div className="human-content">
            <p className="para1">Improving efficiency of your infrastructure, either a building or a city. With detailed light study we implement sustainable solutions to improve your energy efficiency and reduce carbon footprint.</p>
            <p className="para2">Deliverables<br/>
              Light audit<br/>
              Energy report<br/>
              Carbon reduction<br/>
              Project management<br/>
              Before & After assessment</p>
        </div>
      </div>:null
    }

    { showwww? 
    <div className="indi-project">
          <button className="crossButton1" onClick={()=>setShowwww(false)}>
            <img className="indi-btn" alt="Vector" src={VectorLeft} />
          </button>
          <h1> 3€ / m2</h1>
      </div>:null
    }


    { showwwww? 
    <div className="company">
          <button className="crossButton1" onClick={()=>setShowwwww(false)}>
            <img className="comp-btn" alt="Vector" src={VectorLeft} />
          </button>
          <h1> 9€ / m2</h1>
      </div>:null
    }


    { showwwwww? 
    <div className="architect">
          <button className="crossButton1" onClick={()=>setShowwwwww(false)}>
            <img className="arch-btn" alt="Vector" src={VectorLeft} />
          </button>
          <h1> 6€ / m2</h1>
      </div>:null
    }

      {/* //Contact-us */}
      
         
         

        {contact? 
        <div ref={menuRef} className='popp1'>
        <h1 className="us">
                Contact us
            </h1>
            <button className="x" onClick={()=>setContact(false)}>
          ✖
          </button>
            <div className="para">
                <p>Let’s create your story
            <br/>
            with <strong>light</strong>. Get in touch </p>
            <img src={arrow2} alt="arrow"  id='arrow2'/>
            <div className='input-div'>
              <input type="text" placeholder='Contact Name'/>
              <input type="text" placeholder='Address'/>
              <input type="text" placeholder='Country' id='country'/>
              <input type="text" placeholder='Postal Code' id='postal' />
              <input type="text" placeholder='Contact Phone'/>
              <input type="text" placeholder='E-mail'/>
              <input type="text" placeholder='Please leave your comment'/>
            </div>
            <div className="checkbox-div">
            <input type="checkbox" />
            <p id='checkbox'>Kindly contact me for my requirement</p>
            </div>

            <button className="submit">Submit</button>
            </div>


            <img src={yellow} alt="yellow" className="yellow" />

            <div className="contact-footer1">
              <div className="phone1">
              <div className='img-contt'>
              <img src={phone} alt="" />
              <p>Phone</p>
              </div>
              <p>+352 691 566 820</p>
              </div>

              <div className="phone1">
              <div className='img-contt'>
              <img src={mail} alt="" />
              <p>E-mail</p>
              </div>
              <p>moien@kaash.eu</p>
              </div>

              <div className="phone1">
              <div className='img-contt'>
              <img src={mail} alt="" />
              <p>Address</p>
              </div>
              <p>41a rue des romains, L8041 Luxembourg</p>
              </div>
            </div>
            
        </div>:null
        
      }
        <Foooter/>
        </div>
    </>
  );

};





export default Whatwedo;