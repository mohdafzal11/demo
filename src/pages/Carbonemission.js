import React from 'react'
import Navbar from '../Components/LightNavbar'
import {Routes, Route, useNavigate} from 'react-router-dom';
import One from '../images/One.png';
import Two from '../images/Two.png';
import Three from '../images/Three.png';
import "./CarbonCalculator.css";

const Carbonemission = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
      navigate('/Energyconsump');
  }
  return (
    <>
      <div className="carbon">
        <Navbar />
        <div className="wrappe1">Carbon Calculator</div>
        <div className="wrappe2">
          This tool allows you to calculate the carbon emissions of your lighting and estimate the scope of energy savings.
          <br />
        </div>
        <div className="wrappe3">*Ideally suited for large buildings and municipalities
        </div>
        <div className="wrappe4">
          How does it work ?
        </div>
        <div className="wrappe5">
          Enter your input about light energy consumption in kW or select the qty and type of lamps from drop down menu to help the system calculate light energy consumption.
          <br />
          <br />
          Enter information about country, daily hours and annual days of use.
          <br />
          <br />
          Based on these inputs and market research, the tool will give : <br />
          (a) An estimation of carbon emissions from light use.<br />
          (b) Light savings potential calculated from lamps input and their specifications.<br />
          (c) Cost estimate to upgrade to energy efficient lighting.<br />
        </div>
      <div className='wrappe6'>
        <img className="image1" src={One} alt="1" />
        <img className="image2" src={Two} alt="2" />
        <img className="image3" src={Three} alt="3" />
        </div>
        <div className='gradient'>
          <svg xmlns="http://www.w3.org/2000/svg" width="826" height="700" viewBox="0 0 826 982" fill="none">
            <g filter="url(#filter0_f_3428_26249)">
              <path d="M1667.23 565.457C1667.96 1009.19 1308.83 1369.5 865.099 1370.23C421.362 1370.96 61.0515 1011.84 60.3216 568.1C59.5917 124.364 418.719 -235.947 862.455 -236.677C1306.19 -237.407 1666.5 121.721 1667.23 565.457Z" fill="url(#paint0_radial_3428_26249)" />
            </g>
            <defs>
              <filter id="filter0_f_3428_26249" x="0.320312" y="-296.68" width="1726.91" height="1726.91" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur_3428_26249" />
              </filter>
              <radialGradient id="paint0_radial_3428_26249" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(863.777 566.778) rotate(95.9255) scale(807.911)">
                <stop offset="0.107292" stop-color="#FFFF00" />
                <stop offset="0.273958" stop-color="#33AB4D" />
                <stop offset="0.39375" stop-color="#03B829" />
                <stop offset="0.64375" stop-color="#D9D9D9" stop-opacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>


        <div className="wrappe7">
        <button className="button1" onClick={handleButtonClick}>Start</button>

        </div>
      </div>

    </>
  )
}
export default Carbonemission