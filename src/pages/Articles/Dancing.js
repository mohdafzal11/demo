import React from "react";
import "./Dancing.css";
import Foooter from "../../Components/Foooterwhat";
import Navbar from "../../Components/Navbar";
import daimage14 from "../../images/daimage14.png"
import daimage30 from "../../images/daimage30.png"
import daimage33 from "../../images/daimage33.png"
import daimage8 from "../../images/daimage8.png"
import daimage9 from "../../images/daimage9.png"

export const Dancing = () => {
    return (
        <>
        <Navbar/>
        <div className="blog-concerts">
            <div className="div-2">
                <p className="dancing-to-light">
                    <span className="text-wrapper-11">
                        Dancing to light tunes
                        <br />
                        <br />
                    </span>
                    <span className="text-wrapper-12">updated jan 2023</span>
                </p>
                <p className="text-wrapper-13">
                    Lighting adds a layer of immersive experience in live concerts, triggering the sensorial receptors of our mind
                    and body. The result is an atmosphere with positive vibes and feelings.
                </p>
                <p className="lighting-is-built">
                    Lighting is built into concerts, addressing four major sections of the stage: downstage right, centre, left
                    and upstage centre. Along with specific attention from soft ambient lighting and spotlights for added
                    contrast. Then there are ancient par cans, which are essentially metal-encased car headlights. A dash of
                    colour will fresnel and you have the great combination for stage lighting.
                    <br />
                    <br />
                    <br />
                    Traditionally, stage lighting came to life with theatres and music shows, eventually upgrading the
                    infrastructure with LED lights. which on flick of a button switches the colour and light effect, with
                    possibilities of millions of colours, shapes and shades.
                </p>
                <p className="with-technology-came">
                    With technology came programmable wristbands, synchronised colour flickers add another dimension to audience
                    experience.
                    <br />
                    Tools are extremely advanced and intelligent, however the human evolution with the use of light power is not
                    commendable. Over the last 50 years, the light effects have primarily improvised to laser strobes but the
                    personalised lighting design approach to a concert is still missing. The inconsistent splash of colour with
                    random strobes have not done much in elevating a music lover experience, the stages have definitely become
                    fancier with crazy venues.
                    <br />
                    <br />
                    It will be interesting to see the evolution of lighting design into concert planning where lighting is used as
                    a visual element along with sound to complement each other. One can steal some tips from the theatre lighting
                    guide book.
                </p>
                <div className="group" >
                    <img src={daimage9} alt="" />
                </div>
                <img className="image" alt="Image" src={daimage8} />
                
                <div className="group-wrapper">
                    <div className="image-wrapper">
                        <img className="image-2" alt="Image" src={daimage14} />
                    </div>
                </div>
                <p className="when-was-it">
                    When was it conceived that lighting systems are as important as the concert itself? It all started out with
                    strobe lights which then became laser displays. The first band to use it was Led Zeppelin in 1975, followed by
                    many artists such as Marylin Manson in 2009 who performed with lights everywhere (from the stage to his
                    fingertips) as the main characters. The curious thing is that he is blind, but he wanted to better involve his
                    public and make they live a unique experience.
                    <br />
                    <br />
                    Laser displays are also used by Indie artist to create a better ambiance for the public and breathtaking
                    results. For example, indie electronic artist Dan Deacon created a free app for his concert that interacts
                    with the concerts and make the public live a memorable experience.
                </p>
                <div className="group-2">
                    <img className="image-3" alt="Image" src={daimage30} />
                    <img className="image-4" alt="Image" src={daimage33} />
                </div>
                
                <p className="if-you-would-like-to">
                    <br />
                    If you would like to discuss further or you have an interesting light story to share, write to us at
                    moien@kaash.eu.
                </p>
            </div>
        </div>
        <Foooter/>
        </>
    );
};
export default Dancing