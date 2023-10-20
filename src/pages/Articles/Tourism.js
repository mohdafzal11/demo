import React from "react";

import timage8 from "../../images/timage8.png"
import timage9 from "../../images/timage9.png"
import timage35 from "../../images/timage35.png"
import timage14 from "../../images/timage14.png"
import timage11 from "../../images/timage11.png"
import "./Tourism.css";
import Foooter from "../../Components/Foooterwhat";
import Navbar from "../../Components/Navbar";

export const Tourism = () => {
    return (
        <>
        <Navbar/>
        <div className="blog-tourism">
            <div className="div-2">
                <p className="re-inventing-tourism">
                    <span className="text-wrapper-11">
                        Re-inventing tourism with Light
                        <br />
                        <br />
                    </span>
                    <span className="text-wrapper-12">updated jan 2023</span>
                </p>
                <p className="there-s-an-ever">
                    There&#39;s an ever increasing demand on 24 hours illuminated cities but light pollution and dark sky
                    compliance cannot be neglected. Smart sensory lighting, presents a good tool to celebrate cities but preserve
                    ecology. The dark will be the new light. The cities will be accentuated into newly discovered light colors.
                    Lighting will be crucially planned for every little thing. As it is said, ‘Light is Future’. <br />
                    (Images - internet)
                </p>
                <p className="people-are-striving">
                    People are striving for entertainment, exploring new territories, visiting cities, basking in culture through
                    food, people and monuments. For several centuries, the ancient castles, forts, administrative buildings, as
                    well as contemporary architecture have lived as noble embodiments of a society&#39;s ever-evolving ideals,
                    beliefs, cultures, and values. These structures serve as living relics of the past and also provide a glimpse
                    into the future of today&#39;s civilisation. <br />
                    <br />
                    Often visited by tourists and these structures contribute significantly to the economy of the nation, it is of
                    foremost relevance to provide them with a distinct persona when it is night time. Over the years, the
                    discovery and improvement of lighting has opened a range of opportunities, including night tourism. With
                    cities spending a good fortune to attract tourism, urban lighting and light-scapes showcase the vibrant
                    cityscape.
                </p>
                <p className="even-before-modern">
                    Even before modern illumination was invented, light has always been a significant element of many festivals.
                    Lights, lamps, lanterns and fireworks hold deep meaning in various cultures. While Chinese Lunar Year, Diwali
                    in India, Fête des Lumières in France, Christmas in Brazil, etc, are very popular festivals, many countries
                    have spectacular not so popular ones, Bala Chaturdashi in Kathmandu, Nepal; Hogmanay in Scotland; Winter
                    Illuminations Festival in Japan; Bonfire Night in Lewes, England; are few to name. During a festival, a
                    light&#39;s accentuation of a location serves as more than just illumination; it also serves as a symbol of
                    the culture and a deep seated faith.
                </p>
                <div className="group">
                    <img className="image" alt="Image" src={timage9} />
                    <p className="text-wrapper-13">Conceptual representation of futuristic lighting in hospitality</p>
                </div>
                <img className="image-2" alt="Image" src={timage8} />
                <img className="image-3" alt="Image" src={timage11} />
               
                <img className="group-2" alt="Group" src={timage14} />
                <p className="text-wrapper-14">
                    Light brings an interesting dimension to the intersection of tourism and night. As the fourth dimension of
                    architecture, it offers enormous value to these structures. Using light to enhance the architectural
                    subtleties, the grandiosity of the structure, the depth and the textures of the materials creates an immersive
                    experience. Moving on from well illuminated museums and galleries, lighting now plays a bigger role in
                    influencing the city scape by creating a unique ambience and experiential aspects of the night that relies on
                    darkness itself to function. #eiffeltower, #burjkhalifa, #empirestatebuilding and others, stand tall as city
                    icons are well celebrated with light. As the sun sets in Paris, the sparkle of dazzling Eiffel awakens the
                    city scape beyond daylight. Shimmering into the darkness of night, it attracts people from all over the world.
                    While the Eiffel Tower shines, Burj Khalifa turns into a billboard, connecting brands with audiences. Often
                    questioned investment of more than a million dollars now generates multi-folds of revenue for property owners.
                    An interesting blend of light and sound show running every hours brings people together and light in its true
                    sense connect communities.
                </p>
                <img className="image-4" alt="Image" src={timage35} />
                <p className="if-you-would-like-to">
                    <br />
                    If you would like to discuss further or you have an interesting light story to share, write to us at
                    moien@kaash.eu.
                </p>
                <p className="text-wrapper-15">
                    “Paris and Dubai witnessed an increase of 20-30% in night tourism footfalls since up-gradation of monument
                    lighting”
                </p>
            </div>
        </div>
        <Foooter/>
        </>
    );
};
export default Tourism