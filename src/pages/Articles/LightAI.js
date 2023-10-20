import React from "react";
import aiiimage16 from "../../images/aiimage16.png"
import aiimage14 from "../../images/aiimage14.png"
import aimappa from "../../images/aimappa.png"
import aiimage1410 from "../../images/aiimage14(1).png"



import "./LightAI.css";
import Navbar from "../../Components/Navbar";
import Foooter from "../../Components/Foooterwhat";

export const LightAI = () => {
    return (
        <>
        <Navbar/>
        <div className="blog-light-AI">
            <div className="div-2">
                <p className="intelligence-of">
                    <span className="text-wrapper-11">
                        Intelligence of Light
                        <br />
                        <br />
                    </span>
                    <span className="text-wrapper-12">updated jan 2023</span>
                </p>
                <p className="text-wrapper-13">
                    Another example of lighting technology impact in our daily life is through Radar sensors and Lidar sensors
                    driven lighting application that can present building owners or visitors with parking availability data on
                    mobile app, allow employees to book meeting rooms or homeowners with personalised lighting and temperature
                    setting based on human behaviour.
                </p>
                <p className="AI-in-lighting">
                    AI in lighting design have changed our conception of the art. It’s easier to create images with thoughts,
                    realistic renders from ideas. For planners, it’s even easier in the time of context as instruments create
                    realistic usable solutions.
                    <br />
                    <br />
                    European energy policy is trying to shift towards renewable energy-based supply by 2050. Smarter integration
                    of existing avenues with smart devices can accelerate the change by 30% just with lighting by doing what we
                    already know. So, in the future we will get energy from wind and sun.
                </p>
                <img className="group" alt="Group" src={aiimage14} />
                <div className="house" >
                    <img src={aiiimage16} alt="" />
                </div>
                   
                <p className="in-one-of-his-work">
                    In one of his work, in 2004, John McCarthy, one of the founding fathers of artificial intelligence, defined it
                    as the science and engineering of making intelligent machines, especially intelligent computer programs.
                    <br />
                    <br />
                    <br />
                    <br />
                    High customer expectations, rising competition and climate challenges, the artificial lighting industry is
                    demanding to improve both building lighting design and energy efficiency with smart lighting control systems.
                    AI technology enabled building systems, it’s faster to turn a sustainable design idea into an intelligent
                    product and a vision into reality with AI algorithm.
                    <br />
                    <br />
                    <br />
                    Augmented reality and AI enabled lighting components already exist in our smart building system technologies.
                    Let’s look at LEDs as light source, they are efficient with long lifetime and low energy consumption, but what
                    makes them really smart is the integration of smart lighting control to automate energy efficiency and predict
                    human behaviour with machine learning. Gradually reducing artificial light carbon footprint and improving user
                    experience with innovation.
                </p>
                <img className="image" alt="Image" src={aimappa} />
                <div className="group-3" >
                    <img src={aiimage1410} alt="" />
                    </div>
               
                <p className="machine-learning-is">
                    Machine learning is helping mankind with smart building infrastructure. About 80 percent of led lighting is
                    attributed to professional applications such as building, office, industry or street lighting system, and
                    about 20 percent to private residential lighting. Adjusting led lights levels or enabling other functions lead
                    to ease of life and work with smart integration of existing technology into lights.
                    <br />
                    <br />
                    <br />
                    Now the talk of town, ChatGPT and DALL-E, interacting with users through text inputs to create ready to
                    consume articles, concepts, renders and even the best practices examples. Every question has a well
                    researched, thoughtfully curated professional answer just in matter of seconds (how much should the lighting
                    fixtures and lighting control cost for a specific case, the function of architectural lighting designer,
                    energy savings, smart home, history of Smart lighting).
                </p>
                <p className="if-you-would-like-to">
                    <br />
                    If you would like to discuss further or you have an interesting light story to share, write to us at
                    moien@kaash.eu.
                </p>
                <p className="text-wrapper-14">
                    “Intelligent use of intelligent technology is the future for sustainable planet”
                </p>
                </div>
            </div>
            <Foooter/>
            </>
    );
};
export default LightAI