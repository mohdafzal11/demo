import React from "react";
import Navbar from "../Components/LightNavbar";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./CCVeriff.css";
import Ellipse_16 from "../images/Ellipse_16.png";
import Ellipse_17 from "../images/Ellipse_17.png";

const CCVerif2 = () => {
  const navigate = useNavigate();
  const handleButtonClick1 = () => {
    navigate("/results");
  };
  const handleButtonClick2 = () => {
    navigate("/CCVerif");
  };
  return (
    <>
      <div>
        <Navbar />
        <div className="a1">To access results, kindly verify email adress.</div>
        <div className="a2">Enter your email</div>
        <div>
          <input className="in1" placeholder="hello@email.com" type="email" />
        </div>
        <div>
          <button className="b1" onClick={""}>
            Send code
          </button>
        </div>
        <div className="a3">Enter the 5-digit code we have sent you to</div>
        <div className="a4">
          Did not receive the email? Check your spam folder or try again with a
          new email adress.
        </div>
        <div className="flex-frame">
          <div className="frame">
            <input type="number" className="otpinput"></input>
          </div>
          <div className="frame">
            <input type="number" className="otpinput"></input>
          </div>
          <div className="frame">
            <input type="number" className="otpinput"></input>
          </div>
          <div className="frame">
            <input type="number" className="otpinput"></input>
          </div>
          <div className="frame">
            <input type="number" className="otpinput"></input>
          </div>
        </div>
        <div className="bgr">
          <button className="b" onClick={handleButtonClick2}>
            &lt;&nbsp;&nbsp;Back
          </button>
          <button className="n" onClick={handleButtonClick1}>
            Get results
          </button>
        </div>
      </div>
      <div className="box16">
        <img className="ellipse16" alt="Ellipse16" src={Ellipse_16} />
      </div>
      <div className="box17">
        <img className="ellipse17" alt="Ellipse17" src={Ellipse_17} />
      </div>
    </>
  );
};

export default CCVerif2;
