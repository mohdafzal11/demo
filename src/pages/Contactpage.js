import { useRef } from 'react';
import React from 'react';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Foooterwhat'
import arrow2 from '../images/arrow2.png';
import phone from '../images/icons8-ringer-volume-50.png'
import mail from '../images/icons8-open-envelope-48.png'
import "./Contactpage.css";

const Contactpage = () => {
    const menuRef = useRef(null);
 
  return (
    <>
        <div className="stylee">
        <Navbar/>
        <div ref={menuRef} className='popp'>
        <h1 className="us">
                Contact us
            </h1>
            
            <div className="para">
                <p>Let’s create your story
            <br/>
            with <strong>light</strong>. Get in touch </p>
            <img src={arrow2} alt="arrow" className='arrow2' id='arrow2'/>
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


            {/* <img src={yellow} alt="yellow" className="yellow" /> */}
            {/* <img src={contactEllipse} alt="yellow" className="yellow" /> */}
            <div className='radiall'>

            </div>

            <div className="contactt-footerr">
              <div className="phone">
              <div className='img-cont'>
              <img src={phone} alt="" className='contactImg'/>
              
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
          
        </div>
      

        </div>
        <Footer />
        </>
  )
}
export default Contactpage;