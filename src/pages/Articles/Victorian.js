import React from "react";
import "./Victorian.css";
import vimage15 from "../../images/vimage15.png"
import vimage14 from "../../images/vimage14.png"
import vimage14_1 from "../../images/vimage14(1).png"
import vmappa from "../../images/vmappa.png"
import vmappa_1 from "../../images/vmappa(1).png"
import Foooter from "../../Components/Foooterwhat";
import Navbar from "../../Components/Navbar";



export const Victorian = () => {
    return (
        <>
        <Navbar/>
        <div className="blog-sustainble">
            <div className="div-2">
                <p className="sustainable-lighting">
                    <span className="text-wrapper-11">
                        Sustainable lighting from Victoria Era
                        <br />
                        <br />
                    </span>
                    <span className="text-wrapper-12">updated jan 2023</span>
                </p>
                <p className="the-reign-of-queen">
                    The reign of Queen Victoria spanned the years 1837 to 1901, the era of technological advancements. In
                    Victoria&#39;s time, candle lights and oil lamps were the only means of lighting houses and buildings. While
                    the wealthiest used chandeliers or great candles for special occasions, luxury hotels in Italy and Spain were
                    the first to use electric lights.&nbsp;&nbsp;At that time candles illuminated specific areas or the entire
                    room. By consequence, too much of brightness was disturbing and gave the idea of a new source of lighting.
                </p>
                <p className="the-also-saw">
                    The 1880s also saw circular wick lamps, but as electric lighting became prevalent, people ceased using oil
                    lamps in their daily lives. In addition, there were hand-blown glass period bulbs available. Furthermore, oil
                    lamps and candles were often used alone, and electric power was used when there were guests. Consequently, the
                    bulbs lasted a long time. Besides, light did not emit any smell, unlike oil and candles, so it made for a more
                    pleasant atmosphere for people.
                    <br />
                    <br />
                    In Victorian homes, wick lamps were quite popular, available flat and circular. Unlike other lamps, this has a
                    flame spreader built into the burner which allowed the possibility of increasing or decreasing the
                    illumination of a candle, hence adapting light levels to specific needs. An open ribbon of cotton makes up the
                    wick, as capillary action sucked up paraffin oil through the wick, the choice to choose paraffin smell further
                    personalised the experience. Paraffin was cheaper than fuel, but it wasn’t enough efficient to illuminate the
                    entire rooms.
                </p>
                <p className="text-wrapper-13">
                    Lights were first turned on Pall Mall in 1930s, now with energy crisis and climate change we are going back to
                    dark ages with municipalities switching off the lights. Just like Victorian ages, it’s time for us to explore
                    new innovations and set an example with new technologies to create efficient systems in elder communities.
                </p>
                <img className="group" alt="Group" src={vimage14_1}/>
                <img className="image" alt="Image" src={vimage14} />
                <img className="image-2" alt="Image" src={vimage15} />
                
                <div className="group-2" ><img src={vmappa} alt="" /></div>
                <div className="group-3" ><img src={vmappa_1} alt="" /></div>
                <p className="text-wrapper-14">Efficiency and light control - magical powers of Circular wick lamps</p>
                <p className="revolutionary">Revolutionary innovation of the 18th century&nbsp;&nbsp;- Argand Lamps</p>
                <div className="frame">
                    <div className="text-wrapper-15">Kerosene Lamps</div>
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
export default Victorian