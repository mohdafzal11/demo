import React from 'react'
import { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Foooterwhat'
import "./Articles.css"
import rectangle4270 from "../images/Rectangle-4270.png"
import Rectangle4276 from "../images/Rectangle4276.png"
import Rectangle4276_0 from "../images/Rectangle4276(0).png"
import Rectangle4276_1 from "../images/Rectangle4276(1).png"
import Rectangle4276_2 from "../images/Rectangle4276(2).png"
import Rectangle4276_3 from "../images/Rectangle4276(3).png"
import Rectangle4276_4 from "../images/Rectangle4276(4).png"
import Rectangle4276_5 from "../images/Rectangle4276(5).png"
import Rectangle4276_6 from "../images/Rectangle4276(6).png"
import Rectangle4276_7 from "../images/Rectangle4276(7).png"
import { Link } from 'react-router-dom';


import AOS from 'aos';
import 'aos/dist/aos.css';

export const Articles = () => {

  useEffect(() => {
    AOS.init({once: "true"});
  }, []);

  return (
    <div>

      <Navbar />
      <div className="flower-box">
      <Link to="/pollinators">
        <button className="blog-article" >
          <img className="flower-rectangle" alt="Rectangle" src={rectangle4270} />
          </button>
      </Link>
        
        <div className="Blog">Blog</div>
        <div className='poor-agri' data-aos="slide-left" data-aos-duration="3000" data-aos-offset="200" data-aos-delay="50" data-aos-easing="ease-out" data-aos-anchor-placement="top-center">
        <h1>Poor agriculture and dying pollinators can Urban lighting be blamed ?</h1></div>
      </div>
       
      <div className="divcontainer1">
        <Link to="/immersive">
      <div className="container1">
        <div className="imgcontainer">
          <img src={Rectangle4276} alt="immersive hotels" />
        </div>
          <div className="textcontainer">
            Immersive Hotels with Light
          </div>
      </div>
          </Link>

      <Link to="/festivals">
      <div className="container2">
        <div className="imgcontainer">
          <img src={Rectangle4276_0} alt="" />
        </div><div className="textcontainer2">
        Lights in Bergamo and Brescia
          </div>
      </div>
          </Link>

      <Link to="/lightai">
      <div className="container3">
        <div className="imgcontainer">
          <img src={Rectangle4276_1} alt="" />
        </div>
        <div className="textcontainer2">
          Intelligence of lights
        </div>
      </div>
          </Link>
      </div>


      <div className="divcontainer2">
      <Link to="/victorian">
      <div className="container2">
        <div className="imgcontainer">
          <img src={Rectangle4276_4} alt="" />
        </div><div className="textcontainer2">
        Sustainable lighting from victorian era.
          </div>
      </div>
          </Link>


      <Link to="/ecosystem">
      <div className="container3">
        <div className="imgcontainer">
          <img src={Rectangle4276_3} alt="" />
        </div><div className="textcontainer2">
          Light carbon in sustainable ecosystem.
          </div>
      </div>
          </Link>

      <Link to="/tourism">
      <div className="container1">
        <div className="imgcontainer">
          <img src={Rectangle4276_2} alt="" />
        </div><div className="textcontainer">
            Re-inventing tourism with Light
          </div>
      </div>
          </Link>
      </div>


      <div className="divcontainer3">
      <Link to="/human">
      <div className="container1">
        <div className="imgcontainer">
          <img src={Rectangle4276_5} alt="" />
        </div><div className="textcontainer">
        Human centric lighting design
          </div>
      </div>
          </Link>

      <Link to="/lighting">
      <div className="container2">
        <div className="imgcontainer">
          <img src={Rectangle4276_6} alt="" />
        </div><div className="textcontainer2">
            Luxury of lighting design
          </div>
      </div>
          </Link>

          
      <div className="container3">
      <Link to="/dancing">
        <div className="imgcontainer">
          <img src={Rectangle4276_7} alt="" />
        </div><div className="textcontainer2">
        Dancing to light tunes
          </div>
          </Link>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Articles



