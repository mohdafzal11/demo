import {React,useState, useEffect} from "react";

import Lightvector from "../images/Lightvector.png"
import LEDS from "../images/LEDS.png";
import Footer  from "../Components/Foooterwhat";
import Navbar  from "../Components/Navbar";
import "./Lightschool.css";
import Sports from "../images/Rectangle 4208 (11).png";
import Shop from "../images/shhhop.png"
import Hotel from "../images/Rectangle 4208.png"
import Urban from "../images/Urban.png"
import Home from "../images/home-light.png"
import Museum from "../images/Museum.png"
import Transport from "../images/Transport.png"
import Office from "../images/Officelight.png"
import Industries from "../images/Industries.png"
import Heritage from "../images/Heritage.png";
import Entertainment from "../images/Entertainment.png"
import AOS from 'aos';
import 'aos/dist/aos.css';





const Lightschool = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  const [show, setShow] = useState(false);

  const [showw, setShoww] = useState(false);

  const [showww, setShowww] = useState(false);
  const [showwww, setShowwww] = useState(false);
  const [showwwww, setShowwwww] = useState(false);
  const [showwwwww, setShowwwwww] = useState(false);
  const [showwwwwww, setShowwwwwww] = useState(false);
  const [showwwwwwww, setShowwwwwwww] = useState(false);
  const [showwwwwwwww, setShowwwwwwwww] = useState(false);
  const [showwwwwwwwww, setShowwwwwwwwww] = useState(false);
  const [showwwwwwwwwww, setShowwwwwwwwwww] = useState(false);
  const [showwwwwwwwwwww, setShowwwwwwwwwwww] = useState(false);
  
   return (
        <>
        <div className="navbar-items">
        <Navbar/>
        </div>
        <div className="light-light-school">
        
       
            <div className="overlap-wrapper">
                <div className="overlap">
                <div className="lightbox">
                      <div className="lightellipse" />
                      </div>



                    <div className="rectangle-5" />
 
                    <div className="label">
                    <div className="text-wrapper" data-aos="slide-left" data-aos-duration="2000" data-aos-offset="0" data-aos-delay="50" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-center">Light School</div>
                     </div>

                    {/* LEDS BLOCK */}
                    <div className="block" id="LEDS" >
                    <div className="headinglight">
                    <div className="hhlight">01-LEDS</div><div className="orangelight"></div>
                    <button className="lightbutton" onClick={()=>setShow(true)} >
                    <img src={Lightvector} />

                    </button>
                    </div>
                    <div className="lightphoto">
                     <img src={LEDS} />
                       </div>
                    </div>

                    { show? 
                        <div className="pop1">
                          <div className="led" id="led">
                            <h1>LEDs</h1>
                            <button className="crossButton1" onClick={()=>setShow(false)}>
                              ✖
                              </button>
                          </div>
                            <div className="led-popup">
                                <img src={LEDS} className="led-pop-img" />
                                <p className="para01">Since their <strong>invention in 1942</strong>, LEDs have evolved to become powerful and versatile light source meeting the challenging needs of present world. As semiconductors, though simple to use, LEDs are technical instruments of modern engineering with their performance, life, beam and output driven by current, material and components inside a light fixture.
                                <br/><br/>
                                Lumen maintenance, colour rendition and damage factors are few nuances to consider while evaluation an optimal solution for your project.At Kaash, we follow a rigourous technical evaluation to ensure an ideal solution for your project. Let's build your project with light.
                                </p>
                                
                            </div>
                          </div>:null
                    }



                    {/* Museum BLOCK */}
                    <div className="block" id="Museum" >
                    <div className="headinglight">
                    <div className="hhlight">Museums & Galleries</div><div className="orangelight"></div>
                    <button className="lightbutton" onClick={()=>setShoww(true)} >
                    <img src={Lightvector} />
                    </button>
                    </div>
                    <div className="lightphoto">
                     <img src={Museum} />
                       </div>
                    </div>


                    { showw? 
                        <div className="pop1">
                          <div className="led" id="museum">
                            <h1>Museum & Gallery</h1>
                            <button className="crossButton3" onClick={()=>setShoww(false)}>
                              ✖
                              </button>
                          </div>
                            <div className="led-popup">
                                <img src={Museum} className="led-pop-img" />
                                <p className="para01">Light is the absolute necessity to highlight the colours, contrast, and beauty of the artefacts. Light for art is about finding the perfect <strong>balance between light and darkness</strong> to create a specific mood and ambiance that complements the exhibits while enhancing every visitor’s experience. 
                                <br/><br/>
                                As the most sensitive application, light quality is of utmost importance for the longitivtiy of art and successful turnaround for every gallery or a museum. Light damage factor, colour rendition, colour shift, harmonic distortions, and beam angles are few among many difficult answers to look for when you need light for art.

                                </p>
                                
                            </div>
                          </div>:null
                    }





                    {/* Home BLOCK */}
                    <div className="block" id="Home" >
                    <div className="headinglight">
                    <div className="hhlight">Home</div><div className="orangelight"></div>
                    <button className="lightbutton" onClick={()=>setShowww(true)}>
                    <img src={Lightvector} />
                    </button>
                    
                    </div>
                    <div className="lightphoto">
                     <img src={Home} />
                       </div>
                    </div>
                   

                    { showww? 
                        <div className="pop1">
                          <div className="led" id="home">
                            <h1>Home</h1>
                            <button className="crossButton1" onClick={()=>setShowww(false)}>
                              ✖
                              </button>
                          </div>
                            <div className="led-popup">
                                <img src={Home} className="led-pop-img" />
                                <p className="para01">
                                Our home is an impression of our life, persona and family. Living spaces are packed with collections and aspirations as art, photos, furniture and decor. Light design create a wonderful visual impression unique to our dream space by binding them together.
                                <br/><br/>
                                Technology conceive <strong>flexible lighting to support different needs of the family</strong> throughout the day, from playful kids corner to dinner with friends or a quite reading corner. Home need a perfect balance of decorative light to complement decor and technical light to support space use with maximum flaxibility.
                                </p>
                                
                            </div>
                          </div>:null
                    }






                   {/* Heritage Block */}
                    <div className="block" id="Heritage" >
                    <div className="headingled">
                    <div className="hhled">01-Heritage</div><div className="orangelight"></div>
                    <button className="lightbutton" onClick={()=>setShowwww(true)}>
                    <img src={Lightvector} />
                    </button>
                    </div>
                    <div className="lightphoto">
                     <img src={Heritage}/>
                       </div>
                    </div>


                    { showwww? 
                        <div className="pop1">
                          <div className="led" id="heritage">
                            <h1>Heritage</h1>
                            <button className="crossButton2" onClick={()=>setShowwww(false)}>
                              ✖
                              </button>
                          </div>
                            <div className="led-popup">
                                <img src={Heritage} className="led-pop-img" />
                                <p className="para01">Castles, forts, and other heritage architecture are noble embodiments of a society's evolving ideals, beliefs, cultures, and values. They serve as living relics of the past and also provide a glimpse into the future of today's civilisation. Often celebrated for tourism, this heritage is pivotal towards economic development along with culture conservation. 
                                <br/><br/>
                                Light, as the fourth dimension of architecture, offers enormous value to these structures by illuminating them. <strong>Light enhance the architectural subtleties</strong> and the grandiosity of the structure. Light metric of colour, rendition, IP and IK are crucial parameters for monuments subjected to adverse weather conditions.
                                </p>
                                
                            </div>
                          </div>:null
                    }










                   {/* Shop Block */}
                    <div className="block" id="Shop" >
                    <div className="headingled">
                    <div className="hhled">01-Shop</div><div className="orangelight"></div>
                    <button className="lightbutton" onClick={()=>setShowwwww(true)}>
                    <img src={Lightvector} />
                    </button>
                    </div>
                    <div className="lightphoto">
                     <img src={Shop} />
                       </div>
                    </div>


                    { showwwww? 
                        <div className="pop1">
                          <div className="led" id="shop">
                            <h1>Shop</h1>
                            <button className="crossButton1" onClick={()=>setShowwwww(false)}>
                              ✖
                              </button>
                          </div>
                            <div className="led-popup">
                                <img src={Shop} className="led-pop-img" />
                                <p className="para01">Luxury retail and fast fashion are in a continuous endeavour to be unique and attractive.<strong> Good lighting create inviting environment and promote sales.</strong> Light is an immersive tool to create desired ambience to complement brand mood, highlight product details - colour, texture, design and increase business prospects. 
                                <br/><br/>
                                Dynamic displays in shop windows and adaptive lighting on the inside initiate positive engagement. Colour rendition, temperature and beam angle are crucial parameters for shop lighting, while ensuring minimal glare and maximum visual comfort for the shoppers.
                                </p>
                                
                            </div>
                          </div>:null
                    }





                   {/* Hotel Block */}
                    <div className="block" id="Hotel" >
                    <div className="headingled">
                    <div className="hhled">01-Hotel</div><div className="orangelight"></div>
                    <button className="lightbutton" onClick={()=>setShowwwwww(true)}>
                    <img src={Lightvector} />
                    </button>
                    </div>
                    <div className="lightphoto">
                     <img src={Hotel} />
                       </div>
                    </div>

                    { showwwwww? 
                        <div className="pop1">
                          <div className="led" id="hotel">
                            <h1>Hotel</h1>
                            <button className="crossButton1" onClick={()=>setShowwwwww(false)}>
                              ✖
                              </button>
                          </div>
                            <div className="led-popup">
                                <img src={Hotel} className="led-pop-img" />
                                <p className="para01">Hotels are a great place to experience the design trends, technology and culture as business and leisure travellers fly around the world. A visitors impression builds from the facade to a gradual progression into the lobby, lounges and guest rooms. 
                                <br/><br/>
                                Light interaction with user and space function have unique influence on desired atmosphere and experience.  <strong>Light accent highlight the details, create drama while ambient improves functional experience.</strong> Light colour, design, shape and size are significant along with LEDs quality to build a rich comforting environment. 
                                </p>
                                
                            </div>
                          </div>:null
                    }





                   {/* Entertainment Block */}
                    <div className="block" id="Entertainment" >
                    <div className="headingled">
                    <div className="hhled">01-Entertainment</div><div className="orangelight"></div>
                    <button className="lightbutton" onClick={()=>setShowwwwwww(true)}>
                    <img src={Lightvector} />
                    </button>
                    </div>
                    <div className="lightphoto">
                     <img src={Entertainment} />
                       </div>
                    </div>

                    { showwwwwww? 
                        <div className="pop1">
                          <div className="led" id="entertain">
                            <h1>Entertainment</h1>
                            <button className="crossButton4" onClick={()=>setShowwwwwww(false)}>
                              ✖
                              </button>
                          </div>
                            <div className="led-popup">
                                <img src={Entertainment} className="led-pop-img" />
                                <p className="para01">Light evokes emotions, with every colour triggering a different node. Using the <strong>sensorial power of light, immersive spaces</strong> are realised to support event theme and create desired ambience.
                                <br/>
                                <strong>Control over DMX and mixing of RGBW LEDs</strong> synced with projection mapping can generate imaginative scenes in physical space, elevating the experience. Robust control gears with high switching cycles and flawless programming are must haves for a intuitive lighting experience. 
                                </p>
                                
                            </div>
                          </div>:null
                    }
                    






                   {/* UrbanSpaces Block */}
                    <div className="block" id="UrbanSpaces" >
                    <div className="headingled">
                    <div className="hhled">01-Urban Spaces</div><div className="orangelight"></div>
                    <button className="lightbutton" onClick={()=>setShowwwwwwww(true)}>
                    <img src={Lightvector} />
                    </button>
                    </div>
                    <div className="lightphoto">
                     <img src={Urban} />
                       </div>
                    </div>


                    { showwwwwwww? 
                        <div className="pop1">
                          <div className="led" id="urban">
                            <h1>Urban Spaces</h1>
                            <button className="crossButton5" onClick={()=>setShowwwwwwww(false)}>
                              ✖
                              </button>
                          </div>
                            <div className="led-popup">
                                <img src={Urban} className="led-pop-img" />
                                <p className="para01">Urban landscape is presenting city planners with new challenges in creating a unified environment for public life which is safe, functional and yet sustainable. Lighting can help in many ways. Bringing communities together at night by providing a safe and comfortable environment for play and conversations and local businesses. 
                                <br/><br/>
                                Light pollution and low pollination is a rising issue in the urban environment, in the form of unwanted light. <strong>Light design with intelligent controls</strong> enable light to be reactive towards space use and build <strong>greener healthier communities</strong> while preserving the bio-diversity and reversing climate change.
                                </p>
                                
                            </div>
                          </div>:null
                    }



                   {/* Transport Block */}
                    <div className="block" id="Transport" >
                    <div className="headingled">
                    <div className="hhled">01-Transport</div><div className="orangelight"></div>
                    <button className="lightbutton" onClick={()=>setShowwwwwwwww(true)}>
                    <img src={Lightvector} />
                    </button>
                    </div>
                    <div className="lightphoto">
                     <img src={Transport} />
                       </div>
                    </div>

                    { showwwwwwwww? 
                        <div className="pop1">
                          <div className="led" id="transport">
                            <h1>Transport</h1>
                            <button className="crossButton6" onClick={()=>setShowwwwwwwww(false)}>
                              ✖
                              </button>
                          </div>
                            <div className="led-popup">
                                <img src={Transport} className="led-pop-img" />
                                <p className="para01">Connecting people beyond oceans, transport hubs have created a cohesive ecosystem. Operational 24x7, these spaces should be welcoming and sustainable while allowing travellers to rest, shop and eat.
                                <br/><br/>
                                Light for facade defines the architectural view at night and support different demands of travellers and businesses on the inside. <strong>Creating a brighter ambience to feel fresh from longer journeys</strong> is the prime function of light, while <strong>sustainable consumption</strong>sustainable consumption and maintenance are the key challenges for operations. Connected lighting solutions helps easy maintenance of such heavy use facilities.
                                </p>
                                
                            </div>
                          </div>:null
                    }




                   {/* Industries Block */}
                    <div className="block" id="Industries" >
                    <div className="headingled">
                    <div className="hhled">01-Industries</div><div className="orangelight"></div>
                    <button className="lightbutton" onClick={()=>setShowwwwwwwwww(true)}>
                    <img src={Lightvector} />
                    </button>
                    </div>
                    <div className="lightphoto">
                     <img src={Industries} />
                       </div>
                    </div>

                    { showwwwwwwwww? 
                        <div className="pop1">
                          <div className="led" id="industries">
                            <h1>Industries</h1>
                            <button className="crossButton9" onClick={()=>setShowwwwwwwwww(false)}>
                              ✖
                              </button>
                          </div>
                            <div className="led-popup">
                                <img src={Industries} className="led-pop-img" />
                                <p className="para01">A vibrant economy relies on manufacturing and logistical facilities as solid cornerstones. To be stronger, smarter, and faster productive workforce is a must.
                                Light for factories and warehouses should support the safety and production with <strong>good quality illuminance</strong> but also <strong>enhance the well-being of workers</strong> by creating a vibrant work environment. 
                                <br/><br/>
                                Daylight harvesting and volumetric brightness are key actors to do so. Integrated light solutions give real-time feedback about space use and light performance for cost-effective decisions. Good lighting creates productive and positive atmosphere to keep people focussed and aware.
                                </p>
                                
                            </div>
                          </div>:null
                    }






                   {/* Office Block */}
                    <div className="block" id="Office" >
                    <div className="headingled">
                    <div className="hhled">01-Office</div><div className="orangelight"></div>
                    <button className="lightbutton" onClick={()=>setShowwwwwwwwwww(true)}>
                    <img src={Lightvector} />
                    </button>
                    </div>
                    <div className="lightphoto">
                     <img src={Office} />
                       </div>
                    </div>


                    { showwwwwwwwwww? 
                        <div className="pop1">
                          <div className="led" id="office">
                            <h1>Office</h1>
                            <button className="crossButton7" onClick={()=>setShowwwwwwwwwww(false)}>
                              ✖
                              </button>
                          </div>
                            <div className="led-popup">
                                <img src={Office} className="led-pop-img" />
                                <p className="para01">Attractive, engaging, and dynamic work spaces helps create successful businesses. Flexible dynamic lighting allow offices to work better and smarter. With balance of natural and artificial light, we create human centric spaces to inspire and focus. 
                                <br/><br/>
                                Smart technologies of IOT, daylight harvesting and occupancy control can generate up to <strong>80% energy savings</strong>. LEDs bio-safety and <strong>human circadian rhythm</strong> are important for healthy workspaces. While luminaire efficacy and sustainable light design allows to minimise carbon footprint. 
                                </p>
                                
                            </div>
                          </div>:null
                    }







                   {/* Sports Block */}
                    <div className="block" id="Sports" >
                    <div className="headingled">
                    <div className="hhled">01-Sports</div><div className="orangelight"></div>
                    <button className="lightbutton" onClick={()=>setShowwwwwwwwwwww(true)}>
                    <img src={Lightvector} />
                    </button>
                    </div>
                    <div className="lightphoto">
                     <img src={Sports} />
                       </div>
                    </div>   

                    { showwwwwwwwwwww? 
                        <div className="pop1">
                          <div className="led" id="sports">
                            <h1>Sports</h1>
                            <button className="crossButton8" onClick={()=>setShowwwwwwwwwwww(false)}>
                              ✖
                              </button>
                          </div>
                            <div className="led-popup">
                                <img src={Sports} className="led-pop-img" />
                                <p className="para01">With it's ever growing popularity, stadiums, sports halls and parks demand advanced infrastructure. Built for multi-use, stadiums hosts concerts and sports hall ceremonies. In these multidimensional utility, flexible lighting becomes ultra important.
                                <br/><br/>
                                It will be a delight for urban skaters to see their park turning to party arena on weekend nights. Well designed lighting begins with <strong>minimal glare for players and maximum comfort for spectators</strong>. Connected lighting with different colours, beams along with high lumen maintenance for durable functional lighting solution.
                                </p>
                                
                            </div>
                          </div>:null
                    }








                </div>
            </div>
        </div> 
        <Footer/>
      
</>
    );
};

export default Lightschool;