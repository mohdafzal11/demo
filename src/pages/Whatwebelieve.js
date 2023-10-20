import { useState, useEffect, useRef } from 'react';
import React from 'react';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer_believe'
import "./Whatwebelieve.css";
import AOS from 'aos';
import 'aos/dist/aos.css';




const Whatwebelieve = () => {
  useEffect(() => {
    AOS.init();
  }, []);

const [show,setShow]=useState (false);

const [isPlus, setIsPlus] = useState(true);
const [isDivVisible, setIsDivVisible] = useState(false);

const handleButtonClick = () => {
  setIsPlus(!isPlus);
  setIsDivVisible(!isDivVisible);
};

const handleClick = () => {
  setIsPlus(!isPlus);
};

const [isPluss, setIsPluss] = useState(true);
const [isDivVisiblee, setIsDivVisiblee] = useState(false);

const handleButtonClick1 = () => {
  setIsPluss(!isPluss);
  setIsDivVisiblee(!isDivVisiblee);
};

const handleClickk = () => {
  setIsPluss(!isPluss);
};
const [isPlusss, setIsPlusss] = useState(true);
const [isDivVisibleee, setIsDivVisibleee] = useState(false);

const handleButtonClick2 = () => {
  setIsPlusss(!isPlusss);
  setIsDivVisibleee(!isDivVisibleee);
};

const handleClickkk = () => {
  setIsPlusss(!isPlusss);
};
  return (
    <>
    <div className="style">

        <Navbar/>

        <div className="grad"></div>
        {/* <div style={{
          minHeight: '5500px',
          backgroundColor: 'black',
          overflowY:'hidden'
      }}/> */}

          <div className="text-wrapper1" data-aos="slide-left" data-aos-duration="2000" data-aos-offset="0" data-aos-delay="50" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-center">What we believe?</div>
          <div className="text-wrapper2">
            We use light to create spaces where people feel good. Using full potential of light we build comfortable spaces, inspiring institutions and playful environments. 
            Working towards sustainable human centric solutions, we help our clients find the perfect light for their project. 
          <br/>
          <br/>
          From heritage buildings to modern offices we fuse intelligent technology with efficient solutions for a greener planet.
          </div>
          <div className="text-wrapper3">Human Centric</div>
          <div className='plus'>
          <button className='image-plus' onClick={handleButtonClick}>
            {isPlus ? '+' : '-'}
          </button>
          {
            isDivVisible && ( <div className="text-wrapper6">
             Light is needed for people, their space and its architecture, hence begins our vision of Human-centric lighting design.
             <br/>
             <br/>
           Every space is conceived with an idea, either to improve people's wellbeing, support economy or deliver business growth. 
           Light as a layer is crucial to complement these visions and their respective functions.
           </div>:null
            )}
          </div>

          <div className="text-wrapper4">Technology</div>
          <div className='plus'>
          <button className='image-plus' onClick={handleButtonClick1}>
            {isPluss ? '+' : '-'} 
          </button>
          {
            isDivVisiblee && ( <div className="text-wrapper7">
            Maximising potential of light and communication to create intelligent safe infrastructure. 
            Deep analysis of electronics to identify the ideal solution for your project.
           </div>:null
)}
          </div>

           <div className="text-wrapper5">Sustainability</div>
          <div className='plus'>
          <button className='image-plus' onClick={handleButtonClick2}>
            {isPlusss ? '+' : '-'}
          </button>
          {
            isDivVisibleee && ( <div className="text-wrapper8">
          Fusing light with technology to reduce carbon footprints and increase efficiency of your infrastructure.
           </div>:null
)}
          </div>
        </div>
        <Footer/>
        </>
  )
}
export default Whatwebelieve;