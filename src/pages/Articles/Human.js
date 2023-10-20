import React from "react";

import "./Human.css";
import himage8 from "../../images/himage8.png"
import himage9 from "../../images/himage9.png"
import himage35 from "../../images/himage35.png"
import himage14 from "../../images/himage14.png"
import Foooter from "../../Components/Foooterwhat";
import Navbar from "../../Components/Navbar";




export const Human = () => {
    return (
        <>
        <Navbar/>
        <div className="blog-human-centric">
            <div className="div-2">
                <p className="human-centric">
                    <span className="text-wrapper-11">
                        Human-centric lighting design
                        <br />
                        <br />
                    </span>
                    <span className="text-wrapper-12">updated jan 2023</span>
                </p>
                <p className="the-advent-of">
                    The advent of artificial light has transformed human lives. It&#39;s becoming more common in our contemporary
                    life to work in environments that lack natural light - basements, dark rooms or workplaces with artificial
                    lighting till far into the night.
                </p>
                <p className="in-view-of-the-fact">
                    {" "}
                    In view of the fact that the most of our time is spent indoors, it&#39;s imperative to understand the role of
                    lighting in influencing our mental health and, by extension, the well-being of others who reside in the space.
                    <br />
                    <br />
                    Emerging light technologies focusing on the data power of light and its impact on people is growing fast.
                    Human Centric Lighting (HCL) is a comprehensive technique of examining the impact of light on humans.
                </p>
                <p className="text-wrapper-13">
                    The fundamentals revolves around mimicking behaviour of natural light in indoor environment based on the time
                    and location. Many solution providers limit themselves to simple uplight solution with changing colors from
                    warm to cool with day time, as even the billion dollar enterprise struggle to get back buck for money in
                    providing a solution synchronised with day, time and location. Maybe the boring company will have a solution
                    someday.
                </p>
                <div className="group" >
                    <img src={himage9} alt="" />
                </div>
                <img className="image" alt="Image" src={himage8} />
                
                <div className="group-wrapper">
                    <div className="image-wrapper">
                        <img className="image-2" alt="Image" src={himage14} />
                    </div>
                </div>
                <p className="working-with-light">
                    Working with light for more than a decade, we are of strong opinion that the concept of HCL goes beyond
                    technology into holistic light planning. Light is for people, their task and its environment, which is where
                    the idea of human centric lighting begins - with people at it core.
                    <br />
                    In this endeavour, light application, tool selection, technical parameters, and human comfort are evaluated in
                    synthesis. A functional yet comfortable space is pivotal in increasing health and well being of its user.
                    Studies have proven the positive impact on happiness quotient in healthcare facilities, increased productivity
                    in offices and healthy engagement in urban spaces. We are on a mission to establish a seamless sync of the
                    mind, body, and light by incorporating people centric design approach. Come join the revolution.
                </p>
                <img className="image-3" alt="Image" src={himage35} />
                
                <p className="if-you-would-like-to">
                    <br />
                    If you would like to discuss further or you have an interesting light story to share, write to us at
                    moien@kaash.eu.
                </p>
                <p className="text-wrapper-14">“Designing with light for activity, architecture and atmosphere”</p>
            </div>
        </div>
        <Foooter/>
        </>
    );
};
export default Human