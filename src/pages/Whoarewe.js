import React from "react";
import { useEffect } from "react";
import Navbar from "../Components/Navbar";
import ellipse from "../images/Ellipse15.png";
import { Card } from "./Card";
import Foooter from "../Components/Foooterwhat";
import Luxxmi from "../images/Luxxim.png";
import Vector from "../images/Vector_(2).png";
import Image106 from "../images/image-106.png";
import Image108 from "../images/image-108.png";
import Image110 from "../images/image-110.png";
import Image111 from "../images/image-111.png";
import Image155 from "../images/Image155.png";
import "./whoarewe.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Whoarewe= () => {

    useEffect(() => {
        AOS.init();
      }, []);

    return (
        <>
        <Navbar />
        
        <div className="about-company-facts">
            <div className="grad"></div>
            

            <div className="div-2"><div className="box"><div className="allipse">
             </div></div>
            

                <div className="overlap-2">
                    {/* <div className="ellipse"  src={ellipse}/> */}
                    <Card
                        className="card-1"
                        property1="white-unclicked"
                        rectangleClassName="card-instance"
                        text="Tech genius - VJ"
                        
                    />
                    <img className="icon-user" alt="Icon user" src={Vector} />
                    <Card
                        className="card-1-instance"
                        property1="white-unclicked"
                        rectangleClassName="card-instance"
                        text="Social bee - LP"/>
                    <img className="icon-user-2" alt="Icon user" src={Vector}  />
                    <Card
                        className="card-2"
                        property1="white-unclicked"
                        rectangleClassName="card-instance"
                        text="Light guru - AG"
                    />
                    <img className="icon-user-3" alt="Icon user" src={Vector}  />
                    <Card
                        className="card-3"
                        property1="white-unclicked"
                        rectangleClassName="card-instance"
                        text="LoremIpsum - LI"
                    />
                    <img className="icon-user-4" alt="Icon user" src={Vector} />
                    <div className="text-wrapper-12">Partners</div>
                    <div className="rectangle-4" />
                    <div className="text-wrapper-13">+100 projects</div>
                    <div className="text-wrapper-14">+10 years</div>
                    <div className="text-wrapper-15">+7 countries</div>
                    <div className="text-wrapper-16" data-aos="slide-left" data-aos-duration="2000" data-aos-offset="0" data-aos-delay="50" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-center">Who we are?</div>
                    <p className="kaash-light">
                        Kaash Light Engineers is a young and dynamic lighting studio, working towards sustainable human centric
                        lighting solutions for people, their cities and its architecture.
                        <br />
                        <br />
                        Using full potential of light we create comfortable living spaces, inspiring institutions and playful
                        environments. We help businesses go green in their energy consumption and create healthier communities with
                        inclusive ecosystem.
                    </p>
                </div>
                <div className="text-wrapper-17">Collaboration</div>
                <div className="text-wrapper-18">Contributors</div>
                <a
                    className="text-wrapper-19"
                    href="https://www.linkedin.com/in/o-amangeldiyeva-a17424250/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Amaldeviya Ogulbagt
                </a>
                <a
                    className="text-wrapper-20"
                    href="https://www.linkedin.com/in/iqbal-bakht-buland-66261422a/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Buland Iqbal Bakht
                </a>
                <a
                    className="text-wrapper-21"
                    href="https://www.linkedin.com/in/ilaria-daniele-489b461bb/"
                    rel="noopener noreferrer"
                    target="_blank" 
                >
                    Daniele Ilaria
                </a>
                <a
                    className="text-wrapper-22"
                    href="https://www.linkedin.com/in/barbara-demurtas-2685ba208/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Demurtas Barbara
                </a>
                <a
                    className="text-wrapper-23"
                    href="https://www.linkedin.com/in/leonardodolfi/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Dolfi Leonardo
                </a>
                <a
                    className="mayra-rivera-coria"
                    href="https://www.linkedin.com/in/mriveracoria/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Mayra Rivera Coria
                </a>
                <a
                    className="text-wrapper-24"
                    href="https://www.linkedin.com/in/labdhi-gala-35245b234/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Gala Labdhi
                </a>
                <a
                    className="text-wrapper-25"
                    href="https://www.linkedin.com/in/sakshi-goel-0ba948248/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Goel Sakshi
                </a>
                <a
                    className="text-wrapper-26"
                    href="https://www.linkedin.com/in/mariaisabellagrandi/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Grandi Maria Isabella
                </a>
                <a
                    className="text-wrapper-27"
                    href="https://www.linkedin.com/in/shashank-gupta-5014a6205/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Gupta Shashank
                </a>
                <a
                    className="text-wrapper-28"
                    href="https://www.linkedin.com/in/goda-leonaviciute/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Leonavičiūtė Goda
                </a>
                <a
                    className="text-wrapper-29"
                    href="https://www.linkedin.com/in/carolina-marques-350b19253/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Marques Carolina
                </a>
                <a
                    className="text-wrapper-30"
                    href="https://www.linkedin.com/in/shankar-merugu-63656a273/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Merugu Shankar
                </a>
                <a
                    className="text-wrapper-31"
                    href="https://www.linkedin.com/in/sakshi-modi-a09197191/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Modi Sakshi
                </a>
                <a
                    className="text-wrapper-32"
                    href="https://www.linkedin.com/in/lejla-nurkovic-b2ab3a24b/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Nurkovic Lejla
                </a>
                <a
                    className="text-wrapper-33"
                    href="https://www.linkedin.com/in/marcopellegrino039/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Pellegrino Marco
                </a>
                <a
                    className="text-wrapper-34"
                    href="https://www.linkedin.com/in/listyanputri/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Putri Listyan
                </a>
                <a
                    className="text-wrapper-35"
                    href="https://www.linkedin.com/in/adityarai0607/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Rai Aditya
                </a>
                <a
                    className="text-wrapper-36"
                    href="https://www.linkedin.com/in/lobalricotti/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Ricotti Linda Loba
                </a>
                <a
                    className="text-wrapper-37"
                    href="https://www.linkedin.com/in/hanae-sahir-15485924b/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Sahir Hanae
                </a>
                <a
                    className="text-wrapper-38"
                    href="https://www.linkedin.com/in/rahul-gawde-b17048219/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Gawde Rahul
                </a>
                <a
                    className="text-wrapper-39"
                    href="https://www.linkedin.com/in/sachin-sharma-71ab6b228/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Sharma Sachin
                </a>
                <a
                    className="text-wrapper-40"
                    href="https://www.linkedin.com/in/maria-slivaeva-dmitrievna/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Silvaeva Maria
                </a>
                <a
                    className="text-wrapper-41"
                    href="https://www.linkedin.com/in/piyush-kumar-singh-22a2671a6/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Singh Piyush Kumar
                </a>
                <a
                    className="text-wrapper-42"
                    href="https://www.linkedin.com/in/elham-solgi-b56116226/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Solgi Elham
                </a>
                <a
                    className="text-wrapper-43"
                    href="https://www.linkedin.com/in/lunavignolo/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Vignolo Luna
                </a>
                <a
                    className="text-wrapper-44"
                    href="https://www.linkedin.com/in/harshada-warrier-a6571b169/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Warrier Harshada
                </a>
                <img className="luxinnovation-instance" alt="Image" src={Luxxmi}/>
                <img className="image" alt="Image" src={Image106} />
                <img className="image-2" alt="Image" src={Image108} />
                <img className="image-3" alt="Image" src={Image111} />
                <img className="image-4" alt="Image" src={Image110 }/>
                <img className="image-5" alt="Image" src={Image155} />
            </div>
        </div>
        <div className="footerwho">
            
        <Foooter/></div>
        </>
    );
};

export default Whoarewe;