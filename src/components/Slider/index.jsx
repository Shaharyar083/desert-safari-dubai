import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./slider.css"
import atlantis from "../../assets/images/atlantis.jfif"
import Butterfly from "../../assets/images/Butterfly.jfif"
import divne from "../../assets/images/divne.jfif"
import Ferrari from "../../assets/images/Ferrari.jfif"
import first from "../../assets/images/first.jfif"
import frame from "../../assets/images/frame.jfif"
import helo from "../../assets/images/helo.jpg"
import GreenPlanet from "../../assets/images/GreenPlanet.jfif"
import laguna from "../../assets/images/laguna.jfif"
import Legoland from "../../assets/images/Legoland.jfif"
import mesume from "../../assets/images/mesume.jfif"
import Mirale from "../../assets/images/Mirale.jfif"
import motion from "../../assets/images/motion.jfif"
import Palm from "../../assets/images/Palm.jfif"
import Shrjah from "../../assets/images/Shrjah.jpg"
import ski from "../../assets/images/ski.jfif"
import water from "../../assets/images/water.jfif"
import Wonder from "../../assets/images/Wonder.jfif"
import zoo from "../../assets/images/zoo.jfif"
import { Link } from 'react-router-dom';



const SliderSection = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
        
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 926,
        settings: {
     
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 652,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className='container-fluid custom_containerslider mt-5'>
        <div className='slider_heading'> Dubai's Best Activities</div>
        <div className='slider_seprator'></div>
        <Slider {...settings}>
          <div>
            <Link to="/tour-detail" className='link-clas'>
              <div className='slider_card_wrapper'>
                <img src={first} className="img-fluid slider_img" />
                <div className='card_name'>Burj Khalifa 124th Floor </div>

              </div>
            </Link>
          </div>
          <div>
          <Link to="/tour-detail" className='link-clas'>
            <div className='slider_card_wrapper'>
              <img src={zoo} className="img-fluid slider_img" />
              <div className='card_name'>Dubai Aquarium & Underwater Zoo

              </div>

            </div>
            </Link>
          </div>
          <div>
          <Link to="/tour-detail" className='link-clas'>
            <div className='slider_card_wrapper'>
              <img src={frame} className="img-fluid slider_img" />
              <div className='card_name'>The Dubai Frame
              </div>

            </div>
            </Link>
          </div>
       
          <div>
          <Link to="/tour-detail" className='link-clas'>
            <div className='slider_card_wrapper'>
              <img src={helo} className="img-fluid slider_img" />
              <div className='card_name'>Helicopter Ride
              </div>

            </div>
            </Link>
          </div>
          <div>
          <Link to="/tour-detail" className='link-clas'>
            <div className='slider_card_wrapper'>
              <img src={mesume} className="img-fluid slider_img" />
              <div className='card_name'>Museum of the Future
              </div>

            </div>
            </Link>
          </div>
          <div>
          <Link to="/tour-detail" className='link-clas'>
            <div className='slider_card_wrapper'>
              <img src={atlantis} className="img-fluid slider_img" />
              <div className='card_name'>Atlantis Aquaventure</div>

            </div>
            </Link>
          </div>
          <div>
          <Link to="/tour-detail" className='link-clas'>
            <div className='slider_card_wrapper'>
              <img src={water} className="img-fluid slider_img" />
              <div className='card_name'>Wild Wide Water Park </div>

            </div>
            </Link>
          </div>
       
          <div>
          <Link to="/tour-detail" className='link-clas'>
            <div className='slider_card_wrapper'>
              <img src={Ferrari} className="img-fluid slider_img" />
              <div className='card_name'>Ferrari World Theme Park
              </div>

            </div>
            </Link>
          </div>
          <div>
          <Link to="/tour-detail" className='link-clas'>
            <div className='slider_card_wrapper'>
              <img src={ski} className="img-fluid slider_img" />
              <div className='card_name'>Ski Dubai
              </div>

            </div>
            </Link>
          </div>
          <div>
          <Link to="/tour-detail" className='link-clas'>
            <div className='slider_card_wrapper'>
              <img src={divne} className="img-fluid slider_img" />
              <div className='card_name'>Sky Dive
              </div>

            </div>
            </Link>
          </div>
          <div>
          <Link to="/tour-detail" className='link-clas'>
            <div className='slider_card_wrapper'>
              <img src={motion} className="img-fluid slider_img" />
              <div className='card_name'>Motion gate Dubai
              </div>

            </div>
            </Link>
          </div>
          <div>
          <Link to="/tour-detail" className='link-clas'>
            <div className='slider_card_wrapper'>
              <img src={Legoland} className="img-fluid slider_img" />
              <div className='card_name'>Legoland Dubai</div>

            </div>
            </Link>
            </div>
            <div>
            <Link to="/tour-detail" className='link-clas'>
            <div className='slider_card_wrapper'>
              <img src={Butterfly} className="img-fluid slider_img" />
              <div className='card_name'>Dubai Butterfly Garden</div>

            </div>
            </Link>
            </div>
            <div>
            <Link to="/tour-detail" className='link-clas'>
            <div className='slider_card_wrapper'>
              <img src={Mirale} className="img-fluid slider_img" />
              <div className='card_name'>Dubai Miracle Garden</div>

            </div>
            </Link>
            </div>
            <div>
            <Link to="/tour-detail" className='link-clas'>
            <div className='slider_card_wrapper'>
              <img src={Wonder} className="img-fluid slider_img" />
              <div className='card_name'>Wonder Bus Tour Dubai</div>

            </div>
            </Link>
            </div>
            <div>
            <Link to="/tour-detail" className='link-clas'>
            <div className='slider_card_wrapper'>
              <img src={Palm} className="img-fluid slider_img" />
              <div className='card_name'>The Palm View Tickets</div>

            </div>
            </Link>
            </div>
           
            <div>
            <Link to="/tour-detail" className='link-clas'>
            <div className='slider_card_wrapper'>
              <img src={laguna} className="img-fluid slider_img" />
              <div className='card_name'>laguna Water Park</div>

            </div>
            </Link>
            </div>
            <div>
            <Link to="/tour-detail" className='link-clas'>
            <div className='slider_card_wrapper'>
              <img src={GreenPlanet} className="img-fluid slider_img" />
              <div className='card_name'>The Green Planet Dubai</div>

            </div>
            </Link>
          </div>
        </Slider>


      </div>

    </>
  )
}

export default SliderSection