import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import officeImg from '../images/office-img.png'
import arroww from '../images/blackarrow.png'
import mansion from '../images/mansion.png'
import redback from '../images/redback.png'
import esc from '../images/esc.png'
import fair from '../images/fair.png'
import './Car.css'
import sixth from '../images/sixth.png'
import tenth from '../images/tenth.png'
import eleven from '../images/eleven.png'
import twelve from '../images/twelve.png'
import thirteen from '../images/thirtheen.png'
import sixten from '../images/sixteen.png'
import bridge from '../images/onebridge.png'
import fourth from '../images/fourth.png'



const MyCarousel = () => {
  const handleSwipe = (isNext) => {
    if (isNext) {
      carouselRef.current.next();
    } else {
      carouselRef.current.previous();
    }
  };

  const carouselRef = React.useRef(null);

  return (
    <div className="carding">
    <Carousel
      ref={carouselRef}
      emulateTouch
      swipeable
      swipeScrollTolerance={5}
      showStatus={false}
      showThumbs={false}
      swipeableProps={{ onSwipedDown: () => handleSwipe(false), onSwipedUp: () => handleSwipe(true) }}
      id="car">
      <div className="first">
        
        {/* first block */}
        
        <div className="small" id="office" >

          <div className="heading-small">
           <div className="hh">01-Office</div>
           <div className="orange">
           <button className="botton">
             <img src={arroww} />
           </button>
           </div>
          </div>
          <div className="photo">
           <img src={officeImg} />
          </div>


        </div>

        {/* second block */}
       
        <div className="small" id="secondd" >
          
          <div className="heading-small">
           <div className="hh">02-Cathedral an der Stad</div>

           <div className="orange">
           <button className="botton">
             <img src={arroww} />
           </button>
          </div>
          </div>
          <div className="photo">
           <img src={mansion} />
          </div>


        </div>


        {/* third block */}
         <div className="long" id="third" >

          <div className="heading-small">
           <div className='hh'>03-Hall de locomotives</div>
           <div className="orange">
           <button className="botton">
             <img src={arroww} />
           </button>
           </div>
         
          </div>

          <div className="photo">
           <img src={redback} id="longphoto" />
          </div>

        </div>

         {/* fourth block */}

        <div className="small" id="fourth" >
        
        <div className="heading-small">
           <div className='hh'>04-Greenwall</div>
           <div className="orange">
           <button className="botton">
             <img src={arroww} />
           </button>
           </div>
        </div>

          <div className="photo">
           <img src={esc} />
          </div>


        </div>


        {/* fifth block */}


        <div className="f5"  id="fifth">


          <div className="heading-wide">
           <div className='hh'>05-Parc</div>
           <div className="orange">
           <button className="botton">
             <img src={arroww} />
           </button>
           </div>
         
          </div>

          <div className="photo">
           <img src={fair} />
          </div>

        </div> 
       
      </div>



      {/* second slide */}

      <div className="first">

        {/* first block */}

       <div className="long" id="sixth" >
       <div className="heading-small" >
           <div className='hh'>06-Architecture Triennial</div>
           <div className="orange">
           <button className="botton">
             <img src={arroww} />
           </button>
           </div>
         
          </div>

          <div className="photo">
           <img src={sixth} id="longphoto" />
          </div>
        </div>

         {/* second block */}

       <div className="small" id="tenth">
       <div className="heading-small">
           <div className='hh'>10-Light and AI</div>
           <div className="orange">
           <button className="botton">
             <img src={arroww} />
           </button>
           </div>
         
          </div>

          <div className="photo">
           <img src={tenth}  />
          </div>

       </div>


       {/* third block */}

       <div className="f5" id="twelve">
       <div className="heading-wide">
           <div className='hh'>12-Flying saucer</div>
           <div className="orange">

           <button className="botton">
             <img src={arroww} />
           </button>
           </div>
         
          </div>

          <div className="photo">
           <img src={twelve}  />
          </div>
       </div>

       {/* fourth block */}
       <div className="small" id="eleven">
       <div className="heading-small">
           <div className='hh'>11-Victorian Age Lighting</div>
           <div className="orange">
           <button className="botton">
             <img src={arroww} />
           </button>
           </div>
         
          </div>

          <div className="photo">
           <img src={eleven}  />
          </div>
       </div>

       

       
      </div>
      {/* third slide */}


      {/* first block */}

      <div className="first">

        <div className="f5" id="thirteen">
        <div className="heading-wide">
           <div className='hh'>13-Galerie</div>
           <div className="orange">

           <button className="botton">
             <img src={arroww} />
           </button>
           </div>
         
          </div>

          <div className="photo">
           <img src={thirteen}  />
          </div>
        </div>

       {/* second block */}

       <div className="small" id="fourteen" >
        <div className="heading-small">
           <div className='hh'>14-Light and Pollination</div>
           <div className="orange">
           <button className="botton">
             <img src={arroww} />
           </button>
           </div>
         
          </div>

          <div className="photo">
           <img src={fourth}  />
        </div>
       </div>

       {/* third block */}
       <div className="long" id="bridge" >
       <div className="heading-small">
           <div className='hh'>03 - Hall de locomotives</div>
           <div className="orange">
           <button className="botton">
             <img src={arroww} />
           </button>
           </div>
         
       </div>

          <div className="photo" id="bbridge">
           <img src={bridge}  />
          </div>

       </div>

       {/* fourth block */}
       <div className="small" id="sixten" >
        <div className="heading-small">
           <div className='hh'>16-Light Tourism</div>
           <div className="orange">
           <button className="botton">
             <img src={arroww} />
           </button>
           </div>
         
          </div>

          <div className="photo">
           <img src={sixten}  />
        </div>
       </div>
     
      
     
      
      </div>
    </Carousel>
    </div>
  );
};

export default MyCarousel;