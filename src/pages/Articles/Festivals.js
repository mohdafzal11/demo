import React from "react";
import Footer from "../../Components/Foooterwhat";
import Navbar from "../../Components/Navbar";
import "./Festivals.css";
import fimage14 from "../../images/fimage14.png"
import fimage141 from "../../images/fimage14(1).png"
import fimage16 from "../../images/fimage16.png"
import mappa from "../../images/mappa.png"



export const Festivals = () => {
    return (
        <>
        <Navbar/>
        <div className="blog-light-festival">
            <div className="fdiv-2">
                <p className="lights-in-bergamo">
                    <span className="ftext-wrapper-11">
                        Lights in Bergamo and Brescia
                        <br />
                        <br />
                    </span>
                    <span className="ftext-wrapper-12">updated jan 2023</span>
                </p>
                <p className="the-festival-was">
                    The festival was organized by some big names from around the world, including Angelo Bonelli, the founder of
                    Kitonb Creative Studio and Pam Show, the curator of the Light Art Collection in Amsterdam. Students from both
                    cities worked tirelessly to create installations that expressed their feelings about art.
                    <br />
                    <br />
                    Art lighting with AL in an architectural context
                    <br />
                    The festival in Bergamo featured the Upper Town, which covered all the must-see historic and cultural spots.
                    The heart of Bergamo’s ancient city, Piazza Vecchia, was illuminated with masterpieces of light engineering.
                    And to top it off, the Choir of the Gaetano Donizetti Conservatory accompanied video projections on the Angelo
                    Mai Civic Library.
                </p>
                <p className="art-lighting-in">
                    Art lighting in Bergamo&#39;s historic centre
                    <br />
                    The festival was such a hit that the mayors of both cities couldn&#39;t stop talking about it! Brescia&#39;s
                    mayor, Emilio Del Bono, called it an &#34;excellent visiting card&#34; for the year ahead. While Bergamo&#39;s
                    mayor, Giorgio Gori, hailed it as &#34;one of the most important and spectacular events in the capital&#34;.
                    The festival brought national and international light art expressions to Bergamo for the first time, and the
                    installations were designed to enhance the city&#39;s rich cultural heritage.
                </p>
                <p className="so-if-you-missed-out">
                    So, if you missed out on this festival, don&#39;t worry. Keep an eye out for next year&#39;s &#34;Light is
                    Life&#34; festival and experience the magic of light and art in Bergamo and Brescia. It&#39;s an event
                    that&#39;s sure to leave you feeling energized and illuminated!
                </p>
                <p className="if-you-would-like-to">
                    <br />
                    If you would like to discuss further or you have an interesting light story to share, write to us at
                    moien@kaash.eu.
                </p>
                <img className="fgroup" alt="Group" src={fimage141} />
                <div className="fgroup-wrapper">
                    <div className="fimage-wrapper">
                        <img className="fimage" alt="Image" src={fimage16} />
                    </div>
                </div>
                <p className="are-you-ready-to">
                    Are you ready to light up your life? Well, in Bergamo and Brescia they did just that with the &#34;Light is
                    Life&#34; festival! Held in February to bring together renewable sources of energy and tourism in a dazzling
                    display of lights.
                    <br />
                    <br />
                    The festival had a noble cause too, with the aim of raising awareness for energy consumption and promoting
                    social well-being. Funds raised were donated to the Energy Bank to support local families, who were hit hard
                    by the pandemic. A2A, a lighting society, even donated a sum equivalent to the volume of energy used!
                    <br />
                    Lighting map of the city
                </p>
                <img className="fimage-2" alt="Image" src={fimage14} />
                <div className="fgroup-2" >
                    <img src={mappa} alt="" />
                </div>
                
               
                <p className="ftext-wrapper-13">“Light festivals are the excellent visiting card of a city”</p>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default Festivals