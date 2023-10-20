import React from "react";
import { useState } from "react";
import redellipse from "../images/redellipse.png"
// import Pop1up from "./Projects/Pop1up";
import office from '../images/office.png'
import down from "../images/downarrow.png"
import Footer from "../Components/Foooterwhat";
import Navbar from "../Components/Navbar";
import Lightvector from "../images/Lightvector.png"
import Hall from '../images/Hall.png';
import Greenwall from "../images/Greenwall.png"
import "./Ourproject.css";
import sixthh from '../images/sixth.png'
import fair from '../images/fair.png'
import mansion from '../images/mansion.png'
import bridge from '../images/onebridge.png'
import twelve from '../images/twelve.png'
import Kolla from "../images/Kolla.png"
import Galerie from "../images/Galerie.png"
import closebutton from "../images/closebutton.png"
import KNMA from "../images/KNMA.png";
import Skatepark from "../images/Skatepark.png";
import Chambre from "../images/Chambre.png";
import Rectangle4104 from "../images/Rectangle-4104.png"
import Rectangle$4104 from "../images/Rectangle$4104.png"
import Rectanglee4104 from "../images/Rectanglee4104.png"
import Rectangle444104 from "../images/Rectangle444104.png"
import Rectangle4106 from "../images/Rectangle-4106.png"
import Rectangle5115 from "../images/Rectangle5115.png"
import Rectangle5112 from "../images/Rectangle5112.png"
import Rectangle5114 from "../images/Rectangle5114.png"
import Rectangle5111 from "../images/Rectangle5111.png"
import Rectangle55115 from "../images/Rectangle55115.png"
import Rectangle55112 from "../images/Rectangle55112.png"
import Rectangle55114 from "../images/Rectangle55114.png"
import Rectangle55111 from "../images/Rectangle55111.png"
import Rectangle4107 from "../images/Rectangle-4107.png"
import Rectangle4108 from "../images/Rectangle-4108.png"
import Rectangle4109 from "../images/Rectangle-4109.png"
import Rectangle4110 from "../images/Rectangle-4110.png"
import Rectangle4111 from "../images/Rectangle-4111.png"
import Rectangle4112 from "../images/Rectangle-4112.png"
import Rectangle4113 from "../images/Rectangle-4113.png"
import Rectangle$4108 from "../images/Rectangle$4108.png"
import Rectangle$4109 from "../images/Rectangle$4109.png"
import Rectangle$4110 from "../images/Rectangle$4110.png"
import Rectangle$4111 from "../images/Rectangle$4111.png"
import Rectangle$4112 from "../images/Rectangle$4112.png"
import Rectangle$4113 from "../images/Rectangle$4113.png"
import Rectangle444110 from "../images/Rectangle444110.png"
import Rectangle444111 from "../images/Rectangle444111.png"
import Rectangle444112 from "../images/Rectangle444112.png"
import Rectangle444113 from "../images/Rectangle444113.png"
import Rectanglee4108 from "../images/Rectanglee4108.png"
import Rectanglee4109 from "../images/Rectanglee4109.png"
import Rectanglee4110 from "../images/Rectanglee4110.png"
import Rectanglee4111 from "../images/Rectanglee4111.png"
import Rectanglee4112 from "../images/Rectanglee4112.png"
import Rectanglee4113 from "../images/Rectanglee4113.png"
import Rectangle3104 from "../images/Rectangle3104.png"
import Rectangle3106 from "../images/Rectangle3106.png"
import Rectangle3107 from "../images/Rectangle3107.png"
import Rectangle3108 from "../images/Rectangle3108.png"
import Rectangle3109 from "../images/Rectangle3109.png"
import Rectangle3110 from "../images/Rectangle3110.png"
import Rectangle3111 from "../images/Rectangle3111.png"
import Rectangle3112 from "../images/Rectangle3112.png"
import Rectangle3113 from "../images/Rectangle3113.png"
import Rectangle900110 from "../images/Rectangle90110.png"
import Rectangle900111 from "../images/Rectangle90111.png"
import Rectangle900112 from "../images/Rectangle90112.png"
import Rectangle900113 from "../images/Rectangle90113.png"
import Rectangle80104 from "../images/Rectangle80104.png"
import Rectangle80106 from "../images/Rectangle80106.png"
import Rectangle80107 from "../images/Rectangle80107.png"
import Rectangle80108 from "../images/Rectangle80108.png"
import Rectangle80109 from "../images/Rectangle80109.png"
import Rectangle80110 from "../images/Rectangle80110.png"
import Rectangle80111 from "../images/Rectangle80111.png"
import Rectangle80112 from "../images/Rectangle80112.png"
import Rectangle80113 from "../images/Rectangle80113.png"
import Rectangle12104 from "../images/Rectangle12104.png"
import Rectangle12106 from "../images/Rectangle12106.png"
import Rectangle12107 from "../images/Rectangle12107.png"
import Rectangle12108 from "../images/Rectangle12108.png"
import Rectangle12109 from "../images/Rectangle12109.png"
import Rectangle12110 from "../images/Rectangle12110.png"
import Rectangle12111 from "../images/Rectangle12111.png"
import Rectangle12112 from "../images/Rectangle12112.png"
import Rectangle12113 from "../images/Rectangle12113.png"
import Rectangle44104 from "../images/Rectangle44104.png"
import Rectangle44106 from "../images/Rectangle44106.png"
import Rectangle44107 from "../images/Rectangle44107.png"
import Rectangle44108 from "../images/Rectangle44108.png"
import Rectangle44109 from "../images/Rectangle44109.png"
import Rectangle44110 from "../images/Rectangle44110.png"
import Rectangle44111 from "../images/Rectangle44111.png"
import Rectangle44112 from "../images/Rectangle44112.png"
import Rectangle44113 from "../images/Rectangle44113.png"
import Rectanglle44104 from "../images/Rectanglle44104.png"

import Rectanglle44108 from "../images/Rectanglle44108.png"
import Rectanglle44109 from "../images/Rectanglle44109.png"
import Rectanglle44110 from "../images/Rectanglle44110.png"
import Rectanglle44111 from "../images/Rectanglle44111.png"
import Rectanglle44112 from "../images/Rectanglle44112.png"
import Rectanglle44113 from "../images/Rectanglle44113.png"
import Rectangle0110 from "../images/Rectangle0110.png"
import Rectangle0111 from "../images/Rectangle0111.png"
import Rectangle0112 from "../images/Rectangle0112.png"
import Rectangle0113 from "../images/Rectangle0113.png"
import Rectangle0104 from "../images/Rectangle0104.png"
import Rectangle900104 from "../images/Rectangle90104.png"
// import ScriptTag from 'react-script-tag';





const Ourprojects = () => {
  const [Project, setProject] = useState(false);
  const [Project2, setProject2] = useState(false);
  const [Project3, setProject3] = useState(false);
  const [Project4, setProject4] = useState(false);
  const [Project5, setProject5] = useState(false);
  const [Project50, setProject50] = useState(false);
  const [Project6, setProject6] = useState(false);
  const [Project7, setProject7] = useState(false);
  const [Project80, setProject80] = useState(false);
  const [Project9, setProject9] = useState(false);
  const [Project10, setProject10] = useState(false);
  const [Project11, setProject11] = useState(false);
  const [Project1, setProject1] = useState(false);
 
  const [Image1, setImage1] = useState(false);
  const [Image2, setImage2] = useState(false);
  const [Image3, setImage3] = useState(false);
  const [Image4, setImage4] = useState(false);
  const [Image5, setImage5] = useState(false);
  const [Image6, setImage6] = useState(false);
  const [Image7, setImage7] = useState(false);
  const [Image8, setImage8] = useState(false);

  const [Image11, setImage11] = useState(false);
  const [Image12, setImage12] = useState(false);
  const [Image13, setImage13] = useState(false);
  const [Image14, setImage14] = useState(false);
  const [Image15, setImage15] = useState(false);
  const [Image16, setImage16] = useState(false);
  const [Image17, setImage17] = useState(false);
  const [Image18, setImage18] = useState(false);

  const [Image21, setImage21] = useState(false);
  const [Image22, setImage22] = useState(false);
  const [Image23, setImage23] = useState(false);
  const [Image24, setImage24] = useState(false);
  const [Image25, setImage25] = useState(false);
  const [Image26, setImage26] = useState(false);
  const [Image27, setImage27] = useState(false);
  const [Image28, setImage28] = useState(false);

  const [Image31, setImage31] = useState(false);
  const [Image32, setImage32] = useState(false);
  const [Image33, setImage33] = useState(false);
  const [Image34, setImage34] = useState(false);
  const [Image35, setImage35] = useState(false);
  const [Image36, setImage36] = useState(false);
  const [Image37, setImage37] = useState(false);
  const [Image38, setImage38] = useState(false);
 
  const [Image41, setImage41] = useState(false);
  const [Image42, setImage42] = useState(false);
  const [Image43, setImage43] = useState(false);
  const [Image44, setImage44] = useState(false);
  const [Image45, setImage45] = useState(false);
  const [Image46, setImage46] = useState(false);
  const [Image47, setImage47] = useState(false);
  const [Image48, setImage48] = useState(false);
 
  const [Image57, setImage57] = useState(false);
  const [Image58, setImage58] = useState(false);
  const [Image55, setImage55] = useState(false);
  const [Image56, setImage56] = useState(false);
 
  const [Image51, setImage51] = useState(false);
  const [Image52, setImage52] = useState(false);
  const [Image53, setImage53] = useState(false);

  const [Image61, setImage61] = useState(false);
  const [Image62, setImage62] = useState(false);
  const [Image63, setImage63] = useState(false);
  const [Image64, setImage64] = useState(false);

  const [Image65, setImage65] = useState(false);
  const [Image66, setImage66] = useState(false);
  const [Image67, setImage67] = useState(false);
  const [Image68, setImage68] = useState(false);

  const [Image85, setImage85] = useState(false);
  const [Image86, setImage86] = useState(false);
  const [Image87, setImage87] = useState(false);
  const [Image88, setImage88] = useState(false);
 
  
  const [Image73, setImage73] = useState(false);
  const [Image74, setImage74] = useState(false);
  const [Image75, setImage75] = useState(false);
  const [Image76, setImage76] = useState(false);
  const [Image77, setImage77] = useState(false);
  const [Image78, setImage78] = useState(false);
 
  const [Image93, setImage93] = useState(false);
  const [Image94, setImage94] = useState(false);
  const [Image95, setImage95] = useState(false);
  const [Image96, setImage96] = useState(false);
  const [Image97, setImage97] = useState(false);
  const [Image98, setImage98] = useState(false);

  const [Image103, setImage103] = useState(false);
  const [Image113, setImage113] = useState(false);
  const [Image112, setImage112] = useState(false);
  const [Image111, setImage111] = useState(false);
  const [Image104, setImage104] = useState(false);
  const [Image105, setImage105] = useState(false);
  const [Image106, setImage106] = useState(false);
  const [Image107, setImage107] = useState(false);
  const [Image108, setImage108] = useState(false);
 
 
 





  return (
    <>
    <div className="navbar-items"><Navbar /></div>
      
      <div className="content">

        <div className="labelour">
          <div className="text-wrapperour">Our projects</div>
        </div>

        {/* Hall BLOCK */}
        <div className="block" id="Hall" >
          <div className="headingproject">
            <div className="hhour">Hall</div>
            <div className="orangeour">
            <button className="ourbutton" onClick={() => setProject(true)}>
              <img src={Lightvector} />

            </button>
            </div>

          </div>
          <div className="ourphoto">
            <img src={Hall} />
          </div>
        </div>

        {Project ?
          <div className="projectcontent" id="hallpopup">
            <div className="redbox">
              <img className="redellipse" src={redellipse} />
            </div>
            <div className="closebox">
              <img className="closebutton" alt="Vector" src={closebutton} onClick={() => setProject(false)} />
            </div>
            <div className="label1">
              <div className="text-wrapper1">Hall de locomotives, Luxem</div>
            </div>
            <div className="projectimages">
              <img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle4104} />
              {Image1 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle4106} /> :null}
              {Image2 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle4107} /> :null}
              {Image3 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle4108} /> :null}
              {Image4 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle4109} /> :null}
              {Image5 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle4111} /> :null}
              {Image6 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle4113} /> :null}
              {Image7 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle4110} /> :null}
              {Image8 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle4112} /> :null}
             
             
             
              {/* <div className= "flase" onClick={() => setImage2(false)} > */}
              <img src={Rectangle4106} alt=""  className="smallimage1" onClick={() => setImage1(true)} />
              <img src={Rectangle4107} alt=""  className="smallimage1"  onClick={() => setImage2(true)} />
              <img src={Rectangle4108} alt=""  className="smallimage3"  onClick={() => setImage3(true)}/>
              <img src={Rectangle4110} alt="" className="smallimage7"  onClick={() => setImage7(true)} />
              <img src={Rectangle4112} alt="" className="smallimage8"  onClick={() => setImage8(true)}/>
              <img src={Rectangle4109} alt=""  className="smallimage4"  onClick={() => setImage4(true)}/>
              <img src={Rectangle4111} alt="" className="smallimage5"  onClick={() => setImage5(true)}/>
              <img src={Rectangle4113} alt="" className="smallimage6"  onClick={() => setImage6(true)}/>


            </div>
            <div className="text1">
              <p className="text1-wrapper">
                Translucent waves of special treated fabric, mounted on steel matrix to create inward outward parallel hoops of
                volume. Glowing with light from within like a beating heart to sing the glory of past.
              </p>
            </div>


            <div className="text2">
              <p className="hall-de-locomotives">
                <span className="text2-wrapper">
                  Hall de locomotives is decorated by an aesthetical light sculpture installation, to reminiscence the history
                  of locomotives in building the everyday celebrated legacy of Ville de Dudelange.{" "}
                </span>
                <span className="span">
                  Collab
                  <br />
                </span>
                <span className="text2-wrapper">
                  Christian Bauer Architectes
                  <br />
                  Years 2022 - 2023
                </span>
              </p>
            </div>
            <div className="down"  onClick={() => setProject4(true)} >
              <img className="down" alt="Vector" src={down} onClick={() => setProject(false)} />
              
            </div>

          </div>

          : null
        }

        {/* Parc BLOCK */}

        <div className="block" id="Parc" >
          <div className="headingproject">
            <div className="hhour">Parc de Merl</div><div className="orangeour"></div>
            <button className="ourbutton" onClick={() => setProject2(true)}>
              <img src={Lightvector} />

            </button>
          </div>
          <div className="ourphoto">
            <img src={fair} />
          </div>
        </div>

        {Project2 ?
          <div className="projectcontent" id="parcpopup">
            <div className="redbox">
              <img className="redellipse" src={redellipse} />
            </div>
            <div className="closebox">
              <img className="closebutton" alt="Vector" src={closebutton} onClick={() => setProject2(false)} />
            </div>
            <div className="label1">
              <div className="text-wrapper1">Parc de Merl</div>
            </div>
            <div className="projectimages">
              <img className="bigimage" alt="Rectangle" src={Rectangle44104} />

              {Image11 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle44106} /> :null}
              {Image12 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle44107} /> :null}
              {Image13 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle44108} /> :null}
              {Image17 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle44110} /> :null}
              {Image18 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle44112} /> :null}
              {Image14 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle44109} /> :null}
              {Image15 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle44111} /> :null}
              {Image16 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle44113} /> :null}
              


              <img src={Rectangle44106} alt="" className="smallimage1" onClick={() => setImage11(true)}/>
              <img src={Rectangle44107} alt="" className="smallimage1" onClick={() => setImage12(true)}/>
              <img src={Rectangle44108} alt="" className="smallimage3" onClick={() => setImage13(true)}/>
              <img src={Rectangle44110} alt="" className="smallimage7" onClick={() => setImage17(true)}/>
              <img src={Rectangle44112} alt="" className="smallimage8" onClick={() => setImage18(true)}/>
              <img src={Rectangle44109} alt="" className="smallimage4" onClick={() => setImage14(true)}/>
              <img src={Rectangle44111} alt="" className="smallimage5" onClick={() => setImage15(true)} />
              <img src={Rectangle44113} alt="" className="smallimage6" onClick={() => setImage16(true)}/>
            </div>
            <div className="text1">
              <p className="text1-wrapper">
                Lighting plays an important role in bringing people together at night by providing a safe environment for children to play and adults to socialise. Good lighting support space function and promotes economic activities contributing towards mutual growth.
              </p>
            </div>


            <div className="text2">
              <p className="hall-de-locomotives">
                <span className="text2-wrapper">
                  Parc de Merl is conceptual representation for the municipal parks of future. Taking cues from the smart sustainable cities, the parc contributes towards communal wellbeing of societies with improved and efficient infrastructure.{" "}
                </span>
                <span className="span">
                  Collab
                  <br />
                </span>
                <span className="text2-wrapper">
                  3D artist
                  <br />
                  Years 2022
                </span>
              </p>
            </div>
            <div className="down"  onClick={() => setProject5(true)} >
              <img className="down" alt="Vector" src={down} onClick={() => setProject2(false)} />
              
            </div>

          </div>

          : null
        }


        {/* Kolla BLOCK */}

        <div className="block" id="Kolla" >
          <div className="headingproject">
            <div className="hhour">Light at Kolla</div><div className="orangeour"></div>
            <button className="ourbutton" onClick={() => setProject3(true)} >
              <img src={Lightvector} />

            </button>
          </div>
          <div className="ourphoto">
            <img src={Kolla} />
          </div>
        </div>

        {Project3 ?
          <div className="projectcontent0" id="kollapopup">
            <div className="redbox">
              <img className="redellipse" src={redellipse} />
            </div>
            <div className="closebox">
              <img className="closebutton" alt="Vector" src={closebutton} onClick={() => setProject3(false)} />
            </div>
            <div className="label1">
              <div className="text-wrapper1">Light at Kolla</div>
            </div>
            <div className="projectimages">
              <img className="bigimage" alt="Rectangle" src={Rectangle0104} />
              {Image57 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle0110} /> :null}
              {Image58 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle0112} /> :null}
              {Image55 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle0111} /> :null}
              {Image56 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle0113} /> :null}

              <img src={Rectangle0110} alt="" className="smallimage7" onClick={() => setImage57(true)}/>
              <img src={Rectangle0112} alt="" className="smallimage8" onClick={() => setImage58(true)}/>
              <img src={Rectangle0111} alt="" className="smallimage5" onClick={() => setImage55(true)}/>
              <img src={Rectangle0113} alt="" className="smallimage6" onClick={() => setImage56(true)}/>

            </div>
            <div className="text10">
              <p className="text10-wrapper">
                In the realm where art transcends the boundaries of the ordinary and steps into the enigmatic territory of the
                extraordinary, one particular experiential journey stands as a shimmering testament to the power of imagination
                and the boundless creativity that dwells within the human spirit. This journey, a symphony of luminescence and
                shadow, beckons us to delve into the depths of the unknown—a captivating dance between light, darkness, and the
                human
              </p>
            </div>


            <div className="text20">
              <p className="greenwall">
                <span className="text20-wrapper">
                  Kolla is community of like minded people coming together to create unforgettable experiences of social inclusion for all sections of society.{" "}
                </span>
                <span className="span20">
                  Collab
                  <br />
                </span>
                <span className="text20-wrapper">
                  Hippie Tralala                  <br />
                  Years 2023
                </span>
              </p>
            </div>
            <div className="down"  onClick={() => setProject(true)} >
              <img className="down" alt="Vector" src={down} onClick={() => setProject3(false)} />
              
            </div>

          </div>

          : null
        }
        {/* Flying BLOCK */}

        <div className="block" id="Flying" >
          <div className="headingproject">
            <div className="hhour">Flying saucer</div><div className="orangeour"></div>
            <button className="ourbutton" onClick={() => setProject80(true)}>
              <img src={Lightvector} />

            </button>
          </div>
          <div className="ourphoto">
            <img src={twelve} />
          </div>
        </div>

        {Project80 ?
          <div className="projectcontent0" id="flyingpopup">
            <div className="redbox">
              <img className="redellipse" src={redellipse} />
            </div>
            <div className="closebox">
              <img className="closebutton" alt="Vector" src={closebutton} onClick={() => setProject80(false)} />
            </div>
            <div className="label1">
              <div className="text-wrapper1">Flying Saucer</div>
            </div>
            <div className="projectimages">
              <img className="bigimage" alt="Rectangle" src={Rectangle80104} />
               
              {Image21 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle80106} /> :null}
              {Image22 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle80107} /> :null}
              {Image23 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle80108} /> :null}
              {Image27 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle80110} /> :null}
              {Image28 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle80112} /> :null}
              {Image24 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle80109} /> :null}
              {Image25 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle80111} /> :null}
              {Image26 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle80113} /> :null}





              <img src={Rectangle80106} alt="" className="smallimage1" onClick={() => setImage21(true)}/>
              <img src={Rectangle80107} alt="" className="smallimage1" onClick={() => setImage22(true)}/>
              <img src={Rectangle80108} alt="" className="smallimage3" onClick={() => setImage23(true)}/>
              <img src={Rectangle80110} alt="" className="smallimage7" onClick={() => setImage27(true)}/>
              <img src={Rectangle80112} alt="" className="smallimage8" onClick={() => setImage28(true)}/>
              <img src={Rectangle80109} alt="" className="smallimage4" onClick={() => setImage24(true)}/>
              <img src={Rectangle80111} alt="" className="smallimage5" onClick={() => setImage25(true)}/>
              <img src={Rectangle80113} alt="" className="smallimage6" onClick={() => setImage26(true)}/>
            </div>
            <div className="text1">
              <p className="text1-wrapper">
                The landmark features new exterior spaces, as well as community gathering spaces which include a multi-activity café around a sunken courtyard with a library and multiple screening walls.
                Configuration of flexible lighting with changing light beams support the rotating exhibitions.
                Light wells illuminate the otherwise daylight deprived lower level. To brighten the window less space, vertical lighting creates perceptual brightness. Interplayed with wall washers and grazers, the vertical surfaces are bright all around.
                Rotating spotlights fills horizontal surfaces with pools of light on working table and discussion areas              </p>
            </div>


            <div className="text2">
              <p className="hall-de-locomotives">
                <span className="text2-wrapper">
                  Flying saucer is a brutalist style architectural landmark from 1970s. The spaceship like design served many purpose and finally got a new life by SAF as an exhibition and collaboration space.
                  {" "}<br />
                </span>
                <span className="span">
                  Collab
                  <br />
                </span>
                <span className="text2-wrapper">
                  Sharjah art foundationSpaceContinuum Design Studio                  <br />
                  Year(2019-2021)
                </span>
              </p>
            </div>
            <div className="down"  onClick={() => setProject1(true)} >
              <img className="down" alt="Vector" src={down} onClick={() => setProject80(false)} />
              
            </div>

          </div>

          : null
        }










        {/* Greenwall Block */}
        <div className="block" id="Greenwall" >
          <div className="headingprojectshort">
            <div className="hhour">Greenwall</div><div className="orangeour"></div>
            <button className="ourbutton" onClick={() => setProject4(true)}>
              <img src={Lightvector} />
            </button>
          </div>
          <div className="ourphoto">
            <img src={Greenwall} />
          </div>
        </div>

        {Project4 ?
          <div className="projectcontent" id="greenwallpopup">
            <div className="redbox">
              <img className="redellipse" src={redellipse} />
            </div>
            <div className="closebox">
              <img className="closebutton" alt="Vector" src={closebutton} onClick={() => setProject4(false)} />
            </div>
            <div className="label1">
              <div className="text-wrapper1">Greenwall, Avenues Kuwait</div>
            </div>
            <div className="projectimages">
              <img className="bigimage" alt="Rectangle" src={Rectangle5114} />

              {Image51 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle5112} /> :null}
              {Image52 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle5111} /> :null}
              {Image53 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle5115} /> :null}
              

              <img src={Rectangle5112} alt="" className="smallimage8" onClick={()=> setImage51(true)}/>
              <img src={Rectangle5111} alt="" className="smallimage5" onClick={()=> setImage52(true)}/>
              <img src={Rectangle5115} alt="" className="smallimage6" onClick={()=> setImage53(true)}/>

            </div>
            <div className="text10">
              <p className="text10-wrapper">
                Peaks of blue wavelength combined with ideal colour temperature with sufficient lumens are used to create a sophisticated glow. The light quality enables the healthy plant growth along with refreshing atmosphere.
              </p>
            </div>
            <div className="text20">
              <p className="greenwall">
                <span className="text20-wrapper">
                  Green walls are the perfect way to bring nature indoors while improving the health and well being of people. During the harsh summers of middle east such concepts enriches the space experience.{" "}
                </span>
                <span className="span20">
                  Collab
                  <br />
                </span>
                <span className="text20-wrapper">
                  Avenues mall, Kuwait                <br />
                  Year 2018-2019
                </span>
              </p>
            </div>
            <div className="down"  onClick={() => setProject50(true)} >
              <img className="down" alt="Vector" src={down} onClick={() => setProject4(false)} />
              
            </div>

          </div>

          : null
        }

        {/* Archi Block */}
        <div className="block" id="Archi" >
          <div className="headingprojectshort">
            <div className="hhour">Architecture Triennial</div><div className="orangeour"></div>
            <button className="ourbutton" onClick={() => setProject50(true)} >
              <img src={Lightvector} />
            </button>
          </div>
          <div className="ourphototall">
            <img src={sixthh} />
          </div>
        </div>



        {Project50 ?
          <div className="projectcontent" id="archipopup">
            <div className="redbox">
              <img className="redellipse" src={redellipse} />
            </div>
            <div className="closebox">
              <img className="closebutton" alt="Vector" src={closebutton} onClick={() => setProject50(false)} />
            </div>
            <div className="label1">
              <div className="text-wrapper1">Architectural triennial, Sharj</div>
            </div>
            <div className="projectimages">
              <img className="bigimage" alt="Rectangle" src={Rectangle3104} />

              
              {Image31 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle3106} /> :null}
              {Image32 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle3107} /> :null}
              {Image33 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle3108} /> :null}
              {Image37 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle3110} /> :null}
              {Image38 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle3112} /> :null}
              {Image34 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle3109} /> :null}
              {Image35 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle3111} /> :null}
              {Image36 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle3113} /> :null}

              <img src={Rectangle3106} alt="" className="smallimage1" onClick={() => setImage31(true)}/>
              <img src={Rectangle3107} alt="" className="smallimage1" onClick={() => setImage32(true)}/>
              <img src={Rectangle3108} alt="" className="smallimage3" onClick={() => setImage33(true)}/>
              <img src={Rectangle3110} alt="" className="smallimage7" onClick={() => setImage37(true)}/>
              <img src={Rectangle3112} alt="" className="smallimage8" onClick={() => setImage38(true)}/>
              <img src={Rectangle3109} alt="" className="smallimage4" onClick={() => setImage34(true)}/>
              <img src={Rectangle3111} alt="" className="smallimage5" onClick={() => setImage35(true)}/>
              <img src={Rectangle3113} alt="" className="smallimage6" onClick={() => setImage36(true)}/>
            </div>
            <div className="text1">
              <p className="text1-wrapper">
                Preserving arab architecture, repurpose school building is now SAT office and exhibition ground. Lighting is  envisioned to complement its architecture in the most profound way to support multiple functional needs of display, conversations and collaboration.
              </p>
            </div>
            <div className="text2">
              <p className="hall-de-locomotives">
                <span className="text2-wrapper">
                  Sharjah Architecture Triennial participates in international conversations about architecture that have a resonance at local and regional levels and reflects on the Gulf's shared social, economic, and cultural ties with a wider region.{" "}
                </span>
                <span className="span">
                  Collab
                  <br />
                </span>
                <span className="text2-wrapper">
                  Sharjah architectural triennial
                  Sharjah art foundationSpaceContinuum Design Studio
                  <br />
                  Years 2019-2020
                </span>
              </p>
            </div>
            <div className="down"  onClick={() => setProject2(true)} >
              <img className="down" alt="Vector" src={down} onClick={() => setProject50(false)} />
              
            </div>
          </div>
          : null
        }

        {/* KSA Block */}
        <div className="block" id="KSA" >
          <div className="headingprojectshort">
            <div className="hhour">Mosque at KSA</div><div className="orangeour"></div>
            <button className="ourbutton" onClick={() => setProject11(true)}>
              <img src={Lightvector} />
            </button>
          </div>
          <div className="ourphototall">
            <img src={bridge} />
          </div>
        </div>
        {Project11 ?
          <div className="projectcontent0" id="ksapopup">
            <div className="redbox">
              <img className="redellipse" src={redellipse} />
            </div>
            <div className="closebox">
              <img className="closebutton" alt="Vector" src={closebutton} onClick={() => setProject11(false)} />
            </div>
            <div className="label1">
              <div className="text-wrapper1">Mosque in KSA</div>
            </div>
            <div className="projectimages">
              <img className="bigimage" alt="Rectangle" src={Rectangle900104} />
              {Image61 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle900110 }/> :null}
              {Image62 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle900112} /> :null}
              {Image63 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle900111} /> :null}
              {Image64 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle900113} /> :null}
              

              <img src={Rectangle900110} alt="" className="smallimage7" onClick={()=>setImage61(true)} />
              <img src={Rectangle900112} alt="" className="smallimage8" onClick={()=>setImage62(true)}/>
              <img src={Rectangle900111} alt="" className="smallimage5" onClick={()=>setImage63(true)} />
              <img src={Rectangle900113} alt="" className="smallimage6"  onClick={()=>setImage64(true)} />

            </div>
            <div className="text10">
              <p className="text10-wrapper">
                In the realm of architecture, the interplay of light and structure transcends the ordinary, spotlighting visibility and weaving a narrative against the night's backdrop. This convergence shines brightest in a white marble mosque, celebrating aesthetics, culture, and local craftsmanship.

                Nighttime illumination serves a dual purpose—revealing architectural contours and offering vibrant colour displays. The marble structure bathes in a gentle radiance, awakening design subtleties. Minarets stand tall, softly aglow, while a 360-degree accent glow embraces the golden tomb, a distant allure.

                Detail reigns supreme in this symphony. Architectural intricacies pay homage to local craft and culture. Soft wall washing techniques grace the façade, minimising street light reliance. Additional light layers embrace trees, guiding visitors safely.

                The project artfully harmonises light and form, spotlighting architecture and celebrating details. The dance of light and darkness beckons exploration—a tribute to tradition, modernity, and architectural splendour. At night, the mosque stands as a radiant testament to human creativity. 
              </p>
            </div>


            <div className="text20">
              <p className="greenwall">
                <span className="text2-wrapper">
                  Cultural hotspot for a new regional development in the capital city of Jeddah.                </span><br />
                <span className="span20">
                  Collab
                  <br />
                </span>
                <span className="text20-wrapper">
                  Jellyfish                <br />
                  Years 2022
                </span>
              </p>
            </div>
            <div className="down"  onClick={() => setProject6(true)} >
              <img className="down" alt="Vector" src={down} onClick={() => setProject11(false)} />
              
            </div>

          </div>

          : null
        }



        {/* Stad Block */}
        <div className="block" id="Stad" >
          <div className="headingprojectshort">
            <div className="hhour">Cathedral an der stad</div><div className="orangeour"></div>
            <button className="ourbutton" >
              <img src={Lightvector} />
            </button>
          </div>
          <div className="ourphoto">
            <img src={mansion} />
          </div>

        </div>
        {Project9 ?
          <div className="projectcontent" id='stadpopup'>
            <div className="redbox">
              <img className="redellipse" src={redellipse} />
            </div>
            <div className="closebox">
              <img className="closebutton" alt="Vector" src={closebutton} onClick={() => setProject9(false)} />
            </div>
            <div className="label1">
              <div className="text-wrapper1">Cathedral an der Stad</div>
            </div>
            <div className="projectimages">
              <img className="bigimage" alt="Rectangle" src={Rectangle$4104} />
          
              {Image73 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle$4108} /> :null}
              {Image77 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle$4110} /> :null}
              {Image78 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle$4112} /> :null}
              {Image74 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle$4109} /> :null}
              {Image75 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle$4111} /> :null}
              {Image76 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle$4113} /> :null}

              <img src={Rectangle$4108} alt="" className="smallimage3" onClick={() => setImage73(true)}/>
              <img src={Rectangle$4110} alt="" className="smallimage7" onClick={() => setImage77(true)}/>
              <img src={Rectangle$4112} alt="" className="smallimage8" onClick={() => setImage78(true)}/>
              <img src={Rectangle$4109} alt="" className="smallimage4" onClick={() => setImage74(true)}/>
              <img src={Rectangle$4111} alt="" className="smallimage5" onClick={() => setImage75(true)}/>
              <img src={Rectangle$4113} alt="" className="smallimage6" onClick={() => setImage76(true)}/>
            </div>
            <div className="text10">
              <p className="text10-wrapper">
                Architecture is the most romantic history tour of a city. The fables of old era are scripted through the stained windows and spires. Light grazing through the walls create the soft ambience to experience the presence in space.

                Glowing from within the hues of stained glass window bring the inside church daylight experience on the outside at night. Accentuated spires elevate the grandeur of the towers appearing to shine in moonlight.

                The space envisions minimal carbon footprint with close to nil spill light. Adapting to the natural habitat, controlled lighting supports healthier environment.
              </p>
            </div>


            <div className="text20">
              <p className="greenwall">
                <span className="text2-wrapper">
                  Cathedral an der stad is the imagining Luxembourgish heritage after the sun set. Envisioned in the melancholy of  architectural heritage in new light.{" "}
                  <br />
                </span>
                <span className="span20">

                  <br />
                </span>
                <span className="text20-wrapper">
                  Internal study by arch intern
                  <br />
                  Years 2022
                </span>
              </p>
            </div>
            <div className="down" onClick={() => setProject7(true)} >
              <img className="down" alt="Vector" src={down} onClick={() => setProject9(false)} />

            </div>

          </div>

          : null

        }

        {/* Studio Block */}
        <div className="block" id="Studio" >
          <div className="headingprojectshort">
            <div className="hhour">Architectural Studio</div><div className="orangeour"></div>
            <button className="ourbutton" onClick={() => setProject5(true)}>
              <img src={Lightvector} />
            </button>
          </div>
          <div className="ourphoto">
            <img src={office} />
          </div>
        </div>

        {Project5 ?
          <div className="projectcontent" id="archistudio">
            <div className="redbox">
              <img className="redellipse" src={redellipse} />
            </div>
            <div className="closebox">
              <img className="closebutton" alt="Vector" src={closebutton} onClick={() => setProject5(false)} />
            </div>
            <div className="label1">
              <div className="text-wrapper1">Architectural studio</div>
            </div>
            <div className="projectimages">
              <img className="bigimage" alt="Rectangle" src={Rectangle444104} />
              {Image85 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle444110} /> :null}
              {Image86 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle444112} /> :null}
              {Image87 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle444111} /> :null}
              {Image88 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle444113} /> :null}
            

              <img src={Rectangle444110} alt="" className="smallimage7"  onClick={() => setImage85(true)} />
              <img src={Rectangle444112} alt="" className="smallimage8" onClick={() => setImage86(true)}/>
              <img src={Rectangle444111} alt="" className="smallimage5" onClick={() => setImage87(true)}/>
              <img src={Rectangle444113} alt="" className="smallimage6" onClick={() => setImage88(true)}/>

            </div>
            <div className="text10">
              <p className="text10-wrapper">
                Design office biggest challenge is to keep people productive while being their creative best. Unusually compact meeting space is amplified with volumetric soft light, while the direct component support space function.

                Lighting drives the story telling of wall art with precise accent and soft ambience.
                Interplay of light and shadow in between objects became a token.
              </p>
            </div>


            <div className="text20">
              <p className="greenwall">
                <span className="text20-wrapper">
                  Architectural studio is a boutique office and design studio for young creative architects and interior designers. Nested in the busy suburb of capital city of New Delhi, the small footprint on the outside is a shining example of smart functional space utilisation.
                  Lighting drives the story telling of wall art with precise accent and soft ambience. Interplay of light and shadow in between objects became a token.
                  {" "} <br />
                </span>
                <span className="span20">
                  Collab
                  <br />
                </span>
                <span className="text20-wrapper">
                  Urbanscape architects
                  <br />
                  Year 2017-2018
                </span>
              </p>
            </div>
            <div className="down" onClick={() => setProject9(true)} >
              <img className="down" alt="Vector" src={down} onClick={() => setProject5(false)} />

            </div>


          </div>

          : null
        }

        {/* Galerie Block */}
        <div className="block" id="Galerie" >
          <div className="headingprojectshort">
            <div className="hhour">Galerie</div><div className="orangeour"></div>
            <button className="ourbutton" onClick={() => setProject7(true)}>
              <img src={Lightvector} />
            </button>
          </div>
          <div className="ourphoto">
            <img src={Galerie} />
          </div>
        </div>
        {Project7 ?
          <div className="projectcontent0" id="galerie">
            <div className="redbox">
              <img className="redellipse" src={redellipse} />
            </div>
            <div className="closebox">
              <img className="closebutton" alt="Vector" src={closebutton} onClick={() => setProject7(false)} />
            </div>
            <div className="label1">
              <div className="text-wrapper1">Galerie</div>
            </div>
            <div className="projectimages">
              <img className="bigimage" alt="Rectangle" src={Rectanglle44104} />
              
              {Image103 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectanglle44108} /> :null}
              {Image104 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectanglle44109} /> :null}
              {Image105 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectanglle44111} /> :null}
              {Image106 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectanglle44113} /> :null}
              {Image107 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectanglle44110} /> :null}
              {Image108 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectanglle44112} /> :null}

              <img src={Rectanglle44108} alt="" className="smallimage3" onClick={() => setImage103(true)}/>
              <img src={Rectanglle44110} alt="" className="smallimage7" onClick={() => setImage104(true)}/>
              <img src={Rectanglle44112} alt="" className="smallimage8" onClick={() => setImage105(true)}/>
              <img src={Rectanglle44109} alt="" className="smallimage4" onClick={() => setImage106(true)}/>
              <img src={Rectanglle44111} alt="" className="smallimage5" onClick={() => setImage107(true)}/>
              <img src={Rectanglle44113} alt="" className="smallimage6" onClick={() => setImage108(true)}/>
            </div>
            <div className="text10">
              <p className="text10-wrapper">
                See through glass fills the void with daylight, casting shadows and reflections in the room. Creating an immersive experience for visitors inspired by nature.

                An array of projection light, frames the display with light, creating a seamless impression of art. Light precision nulls the spillover light with high contrast between object and background

                Track spots with flexible light beams, allow to create the right amount of glow desired for the perfect impression.
              </p>
            </div>


            <div className="text20">
              <p className="greenwall">
                <span className="text20-wrapper">
                  Galerie light to communicate, exhibit and engage.
                  {" "} <br />
                </span>
                <span className="span">
                  <br />
                </span>
                <span className="text20-wrapper">
                  Internal study by arch intern                  <br />
                  Years 2022
                </span>
              </p>
            </div>
            <div className="down" onClick={() => setProject80(true)} >
              <img className="down" alt="Vector" src={down} onClick={() => setProject7(false)} />

            </div>
            
          </div>

          : null
        }

        {/* Skatepark Block */}
        <div className="block" id="Skatepark" >
          <div className="headingprojectshort">
            <div className="hhour">Skatepark</div><div className="orangeour"></div>
            <button className="ourbutton" onClick={() => setProject10(true)}>
              <img src={Lightvector} />
            </button>
          </div>
          <div className="ourphoto">
            <img src={Skatepark} />
          </div>
        </div>
        {Project10 ?
          <div className="projectcontent0" id="skateparkpopup">
            <div className="redbox">
              <img className="redellipse" src={redellipse} />
            </div>
            <div className="closebox">
              <img className="closebutton" alt="Vector" src={closebutton} onClick={() => setProject10(false)} />
            </div>
            <div className="label1">
              <div className="text-wrapper1">Skatepark</div>
            </div>
            <div className="projectimages">
              <img className="bigimage" alt="Rectangle" src={Rectanglee4104} />

             
              {Image93 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectanglee4108} /> :null}
              {Image94 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectanglee4109} /> :null}
              {Image95 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectanglee4111} /> :null}
              {Image96 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectanglee4113} /> :null}
              {Image97 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectanglee4110} /> :null}
              {Image98 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectanglee4112} /> :null}

              <img src={Rectanglee4108} alt="" className="smallimage3" onClick={() => setImage93(true)}  />
              <img src={Rectanglee4110} alt="" className="smallimage7" onClick={() => setImage97(true)}/>
              <img src={Rectanglee4112} alt="" className="smallimage8" onClick={() => setImage98(true)}/>
              <img src={Rectanglee4109} alt="" className="smallimage4" onClick={() => setImage94(true)}/>
              <img src={Rectanglee4111} alt="" className="smallimage5" onClick={() => setImage95(true)}/>
              <img src={Rectanglee4113} alt="" className="smallimage6" onClick={() => setImage96(true)}/>
            </div>
            <div className="text10">
              <p className="text10-wrapper">
                Good lighting is important beyond sunset to roll, move and flaunt skating moves. Definite light levels with high amount of visual comfort are utmost priority.

                In this collab, we explore the play of colours through programmable lights adding a new dimension for special occasions or weekend face-off between teams. Through DMX control and intermixing of led colours the sports area can become a party place for late night hangouts.Technology driven light planning create sustainable spaces by reducing light consumption on bad weather days or low utility from community.               </p>
              <br />
            </div>


            <div className="text20">
              <p className="greenwall">
                <span className="text20-wrapper">
                  Skatepark is a new face of urbanisation adding new dimensions to space function and its multi-purpose use.{" "}
                </span>
                <span className="span20">
                  Collab
                  <br />
                </span>
                <span className="text20-wrapper">
                  Internal study by arch intern
                  <br />
                  Years 2022
                </span>
              </p>
            </div>
            <div className="down"  onClick={() => setProject11(true)} >
              <img className="down" alt="Vector" src={down} onClick={() => setProject10(false)} />
              
            </div>

          </div>

          : null
        }

        {/* KNMA Block */}
        <div className="block" id="KNMA" >
          <div className="headingprojectshort">
            <div className="hhour">KNMA</div><div className="orangeour"></div>
            <button className="ourbutton" onClick={() => setProject6(true)}>
              <img src={Lightvector} />
            </button>
          </div>
          <div className="ourphoto">
            <img src={KNMA} />
          </div>
        </div>



        {Project6 ?
          <div className="projectcontent0" id="knmapopup">
            <div className="redbox">
              <img className="redellipse" src={redellipse} />
            </div>
            <div className="closebox">
              <img className="closebutton" alt="Vector" src={closebutton} onClick={() => setProject6(false)} />
            </div>
            <div className="label1">
              <div className="text-wrapper1">KNMA</div>
            </div>
            <div className="projectimages">
              <img className="bigimage" alt="Rectangle" src={Rectangle12104} />
              {Image41 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle12106} /> :null}
              {Image42 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle12107} /> :null}
              {Image43 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle12108} /> :null}
              {Image44 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle12109} /> :null}
              {Image45 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle12111} /> :null}
              {Image46 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle12113} /> :null}
              {Image47 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle12110} /> :null}
              {Image48 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle12112} /> :null}

              <img src={Rectangle12106} alt="" className="smallimage1" onClick={() => setImage41(true)}/>
              <img src={Rectangle12107} alt="" className="smallimage1" onClick={() => setImage42(true)}/>
              <img src={Rectangle12108} alt="" className="smallimage3" onClick={() => setImage43(true)}/>
              <img src={Rectangle12110} alt="" className="smallimage7" onClick={() => setImage47(true)}/>
              <img src={Rectangle12112} alt="" className="smallimage8" onClick={() => setImage48(true)}/>
              <img src={Rectangle12109} alt="" className="smallimage4" onClick={() => setImage44(true)}/>
              <img src={Rectangle12111} alt="" className="smallimage5" onClick={() => setImage45(true)}/>
              <img src={Rectangle12113} alt="" className="smallimage6" onClick={() => setImage46(true)}/>
            </div>
            <div className="text1">
              <p className="text1-wrapper">
              The very essence of art is transformation. In our ceaseless pursuit to offer an unmatched art experience, we have embarked upon a journey that not only celebrates the masterpieces in but also embraces the innovative possibilities that lie at the intersection of art and technology.  This journey begins with light—a medium that possesses the ability to fundamentally alter how we perceive the world around us.

With precision light optics of 6Deg beam and elliptical beams and uniform wall washing an efficient and functional solution was created with minimal light carbon footprint.

By harnessing the power of light, we could usher our visitors into a realm where art, light, and human emotion converge.
              </p>
            </div>
            <div className="text2">
              <p className="hall-de-locomotives">
                <span className="text2-wrapper">
                  A private museum of art exhibiting modern and contemporary works from India and the sub-continent.{" "}
                </span>
                <span className="span">
                  Collab
                  <br />
                </span>
                <span className="text2-wrapper">
                  KNMA
                  <br />
                  Year 2014-2018
                </span>
              </p>
            </div>
            <div className="down"  onClick={() => setProject3(true)} >
              <img className="down" alt="Vector" src={down} onClick={() => setProject6(false)} />
              
            </div>
          </div>
          : null
        }


        {/* Chambre Block */}
        <div className="block" id="Chambre" >
          <div className="headingprojectshort">
            <div className="hhour">La Chambre</div><div className="orangeour"></div>
            <button className="ourbutton" onClick={() => setProject1(true)}>
              <img src={Lightvector} />
            </button>
          </div>
          <div className="ourphoto">
            <img src={Chambre} />
          </div>
        </div>
      </div>
      {Project1 ?
        <div className="projectcontent0" id="chambrepopup">
          <div className="redbox">
            <img className="redellipse" src={redellipse} />
          </div>
          <div className="closebox">
            <img className="closebutton" alt="Vector" src={closebutton} onClick={() => setProject1(false)} />
          </div>
          <div className="label1">
            <div className="text-wrapper1">La chambre</div>
          </div>
          <div className="projectimages">
            <img className="bigimage" alt="Rectangle" src={Rectangle55114} />
            
              {Image111 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle55112} /> :null}
              {Image112 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle55111} /> :null}
              {Image113 ?<img className="bigimage" alt="Rectangle" id="hallbig" src={Rectangle55115} /> :null}
              


            <img src={Rectangle55112} alt="" className="smallimage8"  onClick={() => setImage111(true)}  />
            <img src={Rectangle55111} alt="" className="smallimage5" onClick={() => setImage112(true)} />
            <img src={Rectangle55115} alt="" className="smallimage6" onClick={() => setImage113(true)} />
           

          </div>
          <div className="text10">
            <p className="text10-wrapper">
              Imagining light is easy, but planning for the unknown ain’t. The conceptual arrangement of different space functions in complemented with different layers of light.

              Indirect vertical coves bring the volumetric brightness to fill the room with light. The softness of warm glow from pendants can be used individually or in sync with functional spots to illuminate the task areas.

              The terrace light  mimics the white glow from a full moon night with unsaturated colour ambience.

              Rotating spotlights fills horizontal surfaces with pools of light on working table and discussion areas
            </p>
          </div>


          <div className="text20">
            <p className="greenwall">
              <span className="text20-wrapper">
                La chambre is a small space with multiple roles designed with layers of light for different needs through the day.

                {" "}
              </span>
              <span className="span20">
                Collab
                <br />
              </span>
              <span className="text20-wrapper">
                Private
                <br />
                Year 2022
              </span>
            </p>
          </div>
          <div className="down"  onClick={() => setProject10(true)} >
              <img className="down" alt="Vector" src={down} onClick={() => setProject1(false)} />
              
            </div>

        </div>

        : null
      }
      <Footer/>
    </>
  );
};
export default Ourprojects
