import React from 'react'
import Navbar from '../Components/LightNavbar'
import { Routes, Route, useNavigate } from 'react-router-dom';
import "./CCVerif.css";
import Ellipse_16 from "../images/Ellipse_16.png"
import Ellipse_17 from "../images/Ellipse_17.png"
const CCVerif = () => {
    const navigate = useNavigate();
    const handleButtonClick2 = () => {
        navigate('/CCMoreinfo');
    };
    const handleButtonClick3 = () => {
        navigate('/CCVeriff');
    };
    const handleButtonClick4 = () => {
        navigate('/Results');
    };
    return (
        <>
            <div>
                <Navbar />
               <div className="v1">
               <div className="by1">

                <div className='a1'>
                    To access results,<br/> kindly verify email adress.
                </div>
                <div className='a2'>
                    Enter your email
                </div>
                <div>
                <input className='in1' placeholder="hello@email.com" />

                </div>
                <div>
                <button className="b1" onClick={handleButtonClick3}>Send code</button>
                </div>
                <div className="bgr1">
                    <button className="back" onClick={handleButtonClick2}>&lt;&nbsp;&nbsp;Back</button>
                    <button className="n" onClick={handleButtonClick4}>Get results</button>

                </div></div>
            </div>
            </div>
            <div className="box16">
                <img className="ellipse16" alt="Ellipse16" src={Ellipse_16} />
                </div>
                <div className="box17">
                <img className="ellipse17" alt="Ellipse17" src={Ellipse_17} />
                </div>
        </>
    )
}

export default CCVerif
