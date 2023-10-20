import React from 'react'
import './Contactpop.css'
import ReactModal from 'react-modal';

import Vector from "../images/Vector.png"
import yellow from "../images/Yellow.png"

const Contactpop = () => {
    return (
        <div className="pop">
            <h1 className="us">
                Contact us
            </h1>
            <div className="para">
                <p>Let's create your story
            <br/>
            with light. Get in touch </p>
            
            <button className="submit">

             Submit</button>
            </div>


            <img src={yellow} alt="yellow" className="yellow" />

            <div className="callme">
                <div className="phone">Phone</div>
                <div className="email">E-mail</div>
                <div className="add">Address</div>
            </div>

        </div>
    )
}

export default Contactpop
