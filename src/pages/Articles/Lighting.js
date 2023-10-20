import React from "react";
import "./Lighting.css";
import dimage9 from "../../images/dimage9.png"
import dimage8 from "../../images/dimage8.png"
import dimage35 from "../../images/dimage35.png"
import dimage14 from "../../images/dimage14.png"
import Foooter from "../../Components/Foooterwhat";
import Navbar from "../../Components/Navbar";

export const Lighting= () => {
    return (
        <>
        <Navbar/>
        <div className="blog-lighting-design">
            <div className="div">
                <p className="luxury-of-lighting">
                    <span className="text-wrapper">
                        Luxury of lighting design
                        <br />
                        <br />
                    </span>
                    <span className="span">updated jan 2023</span>
                </p>
                <p className="design-and-style">
                    Design and style evolve over time. Some gradually altering themselves along the way while others disappear in
                    favour of newer expressions. Looking for personality reflection in products and lifestyle, people&#39;s desire
                    for luxury is endless, lately expressed in NFTs.
                    <br />
                    <br />
                    In a built environment, a luxurious affair is complemented by upscale amenities, sumptuous furnishings, and
                    opulent accents. Exotic art collections, celebrated designs, and breath-taking views are never enough.
                    Bringing this experience together is the unsung hero of light. Often limited to beautifully crafted
                    chandeliers and tabletop icons, light adds immense depth to the built environment.
                </p>
                <p className="p">
                    As an art form, it can influence human emotions and spatial feelings, adding an invisible character to the
                    environment. A richly constructed space gets its much-needed spirit from sophisticated lighting design. The
                    lighting world is trying to eliminate the indifference towards light planning by impressing people with the
                    possibilities of thoughtful human-centric light planning.
                </p>
                <div className="group">
                    <img className="image" alt="Image" src={dimage9} />
                    <p className="text-wrapper-2">Conceptual representation of futuristic lighting in hospitality</p>
                </div>
                <img className="img" alt="Image" src={dimage8}/>
                
                <div className="group-wrapper">
                    <div className="image-wrapper">
                        <img className="image-2" alt="Image" src={dimage14}/>
                    </div>
                </div>
                <p className="the-way-light-falls">
                    The way light falls and reflects creates a desired environment to support space function and drive people’s
                    moods. Accents of light, precisely highlighting the masterpieces of paintings, sculptures, or even furniture,
                    can create drama for an intriguing atmosphere. Soft illumination of architecture or vertical surfaces adds
                    warmth to the environment. Just like furnishings, color tones from light can set the mood for a cozy, business
                    or tropical environment. Moving from all things bright for attraction or all things dark for drama, spaces
                    need to be adorned with the play of light and shadow, enough to support function yet dramatic to attract. The
                    first layer of light begins with space planning in conjunction with interior design, adding on more layers as
                    the function evolves.
                    <br />
                    Controlled light can create an intimate space in a public environment or raise the pulse with color and speed.
                    This power of light, when used thoughtfully, adds a layer of luxury. Well-crafted light scenes set a benchmark
                    of luxury and opulence.
                </p>
                <img className="image-3" alt="Image" src={dimage35} />
                <p className="if-you-would-like-to">
                    <br />
                    If you would like to discuss further or you have an interesting light story to share, write to us at
                    moien@kaash.eu.
                </p>
                <p className="text-wrapper-3">
                    “Designing with multi dimensional identity of light as art, form, function and emotion”
                </p>
            </div>
        </div>
        <Foooter/>
        </>
    );
};
export default Lighting