import React from 'react'
import Navbar from '../Components/LightNavbar'
import {Routes, Route, useNavigate} from 'react-router-dom';
import "./CCMoreinfo.css";
import Ellipse_16 from "../images/Ellipse_16.png"
import Ellipse_17 from "../images/Ellipse_17.png"

const CCMoreinfo = () => {
    const navigate = useNavigate();
    const handleButtonClick1 = () => {
        navigate('/CCVerif');
      };
      const handleButtonClick2 = () => {
          navigate('/Energyconsump');
      };
    return (
        <>
            <div>
                <Navbar />
                <div className='txt-1'>
                    Choose country
                </div>
                <div className='input-1'>
                <input type="inp1" placeholder="Country Name" />
                </div>
                <div className='txt-2'>
                    Hours of use (per day)
                </div>
                <div className='input-2'>
                    <input type="inp2" placeholder="Value" />
                </div>
                <div className='txt-3'>
                    Days of use (per year)
                </div>
                <div className='input-3'>
                    <input type="inp3" placeholder="Value" />
                </div>

                <div className='txt-4'>
                    Does your infrastructure support any kind of light control ? (e.g. dimming or motion sensors)        </div>

                <div className='yesno'>
                    <button className="btn" onClick={''}>Yes</button>
                    <button className="btn" onClick={''}>No</button>

                </div>
                <div className="trl-btn">
                    <button className="back" onClick={handleButtonClick2}>&lt;&nbsp;&nbsp;Back</button>
                    <button className="nxt" onClick={handleButtonClick1}>Next&nbsp;&nbsp;&gt;</button>

                </div>
                <div className="box16">
                <img className="ellipse16" alt="Ellipse16" src={Ellipse_16} />
                </div>
                <div className="box17">
                <img className="ellipse17" alt="Ellipse17" src={Ellipse_17} />
                </div>





            </div>
        </>
    )
}

export default CCMoreinfo
