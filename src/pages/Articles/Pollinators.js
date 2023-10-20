import React from "react";
import "./Pollinators.css";
import Footer from "../../Components/Foooterwhat"
import Navbar from "../../Components/Navbar";
import image100 from "../../images/image100.png"
import image98 from "../../images/image98.png"
import image99 from "../../images/image99.png"
import image104 from "../../images/image104.png"
import image105 from "../../images/image105.png"
import image103 from "../../images/image103.png"

export const Pollinators = () => {
    return (
        <>
        <Navbar/>
        <div className="blog-pollinators">
            <div className="div-2">
                
                <p className="poor-agriculture-and">
                    <span className="text-wrapper-11">
                        Poor agriculture and dying pollinators can Urban lighting be blamed ? <br />
                    </span>
                    <span className="text-wrapper-12">
                        <br />
                    </span>
                    <span className="text-wrapper-13">updated jan 2023</span>
                </p>
                <p className="pollinators-such-as">
                    Pollinators such as bees, butterflies, and moths play a critical role in maintaining the bio-diversity of
                    flora and fauna. In Europe, pollinators are responsible for pollinating around 84% of the crops, worth €14.2
                    billion each year.
                    <br />
                    <br />
                    With the increasing use of light to make our cities&nbsp;&nbsp;safer and healthier, there is an increase in
                    light pollution all around us. As the sun set, cities start shimmering in artificial light, most of which is
                    uncontrolled, unregulated and unused. <br />
                    <br />
                    To prevent excessive water, several plants bloom at night and nocturnal pollinators collaborate. It is shown
                    that artificial light at night can modify diurnal plant-pollinator interactions.&nbsp;&nbsp;To find out the
                    source of the problem, a European team of researchers conducted a study by illuminating natural
                    plant-pollinator insects during the night with street-lamps and found out a change on interactions. They have
                    observed a 62% decrease in visits by nocturnal pollinators (such as moths and certain Coleoptera). In
                    addition, this has led to a 13% decrease in production of fruits for local plants.
                </p>
                <p className="text-wrapper-14">In Europe, pollinators support €14.2 billion worth of crops each year.</p>
                <p className="the-impact-of">
                    The impact of artificial lighting on nocturnal pollinators spread to diurnal pollinators, having a increased
                    negative impact on the overall pollination. Another study conducted in the Netherlands about street light
                    affecting the behaviour of bees, revealed that bees were attracted to street lighting and spent less time
                    foraging for food, directly leading to a reduction in pollination activities and affecting crop yields.
                    <br />
                    <br />
                    Existing assessments of the ecosystem service of pollination have been largely restricted to diurnal insects,
                    with a particular focus on generalist foragers such as wild and honey bees. As knowledge of how these
                    plant-pollinator systems function, their relevance to food security and biodiversity, and the fragility of
                    these mutually beneficial interactions increases, attention is diverting to other, less well-studied
                    pollinator groups. One such group are those that forage at night.
                </p>
                <p className="the-impact-of-street">
                    The impact of street lighting on agriculture is not limited to pollination. A study by University of Haifa
                    found that ALAN (Artificial light at night) can disrupt the circadian rhythms of plants, affecting their
                    growth and development, through the means of early flowering, altered hormone levels, and reduced biomass
                    production.
                    <br />
                    <br />
                    Street lighting can also affect the timing of pollination. Pollinators are often attracted to flowers by their
                    scent, which is released at specific times of the day. However, artificial lighting can interfere with the
                    natural timing of flowers, which can lead to a mismatch between the flowering period and the activity of
                    pollinators, thus reducing the amount of pollination that occurs and affect crop yields.
                    <br />
                    <br />
                    The implications of the impact of street lighting on pollination and agriculture are significant. Europe is
                    home to many important agricultural regions, and the reduction in crop yields due to light pollution can have
                    serious economic and food security consequences. Furthermore, the loss of pollinators could have cascading
                    effects on the broader ecosystem, leading to declines in plant diversity and ecosystem stability.
                </p>
                <p className="fortunately-there">
                    Fortunately, there are steps that can be taken to mitigate the impact of street lighting on pollination and
                    agriculture. One approach is to use lighting technologies that are less disruptive to nocturnal pollinators,
                    using the right wavelength of light in LEDs which are less attractive to insects.
                    <br />
                    <br />
                    Another approach is to use lighting that is directional and shielded, reducing the amount of light that is
                    emitted into the environment. Minimising light pollution and reducing the impact of street lighting on nearby
                    agricultural landscapes.
                    <br />
                    <br />
                    In addition, cities and municipalities can adopt policies and regulations to limit the amount of light emitted
                    by streetlights and promote the use of energy-efficient and pollinator-friendly adaptive lighting
                    technologies.
                </p>
                <p className="text-wrapper-15">
                    In conclusion, the impact of street lighting on pollination and agriculture in Europe is a complex and
                    multifaceted issue that requires attention and action. While street lighting is essential for modern urban
                    environments, it is clear that its impact on nocturnal and diurnal pollinators and plants is significant. By
                    taking a holistic approach to street lighting design and management, cities and municipalities can balance the
                    need for visibility and security with the need to protect pollinators and support sustainable agriculture.
                </p>
                <p className="if-you-would-like-to">
                    <br />
                    If you would like to discuss further or find the ideal solution for your need, talk to our light experts at
                    moien@kaash.eu.
                </p>
                <div className="overlap">
                    <p className="street-lighting-and">
                        Street lighting and other forms of artificial lighting to illuminate roads, parks and other functional areas
                        of cities are essential part of modern life. It not only provides safety and security for pedestrians and
                        motorists but also contributes to the aesthetic appeal of the cityscape. Artificial light having spread
                        rapidly around the globe over the last decades, have also lead to undesired negative effects on habitats and
                        pollinators.
                        <br />
                        <br />
                        Recent studies suggest that street lighting may have a significant impact on pollination and agriculture in
                        Europe. Affecting behaviour, physiology, and survival of pollinators and plants:it can disturb
                        plant-pollinator interactions or have consequences on plants reproductions. Many factors, exposed to
                        environmental issues, are covered during the night activities: floral scent, visual cues, and thermogenic
                        sensitivity (associated with thermogenic flowers).
                    </p>
                    <img className="image" alt="Image" src={image98}/>
                </div>
                <img className="image-2" alt="Image" src={image99} />
                <img className="image-3" alt="Image" src={image100} />
                
                <img className="image-4" alt="Image" src={image103} />
                <img className="image-5" alt="Image" src={image104}/>
                <img className="image-6" alt="Image" src={image105} />
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default Pollinators
