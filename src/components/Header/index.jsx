import React from "react";
import "../Header/header.css";
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const desertSefariArray=useSelector((state)=>state.AllheaderFunctionality.desertSefariArray)
  const cityTourArray=useSelector((state)=>state.AllheaderFunctionality.cityTourArray)
  const DhowCruiseArray=useSelector((state)=>state.AllheaderFunctionality.DhowCruiseArray)
  const ticketAdvanureArray=useSelector((state)=>state.AllheaderFunctionality.ticketAdvanureArray)
  return (
    <>
      <div className="top_banner_bar">

        <div className="top_banner_custom_links">
          <div> About Us</div>
          <div> FAQs</div>
          <div> Gallery</div>
          <div>Contact Us
          </div>
       
        </div>
      </div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top custom_nav">
        <Link class="navbar-brand custom_brand_name" to="/">
          Desert Safari Dubai
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item custom_nav_links">
              <Link class="nav-link custom_nav_links" to="/">
                Home <span class="sr-only">(current)</span>
              </Link>
           
            </li>
      
            <li class="nav-item custom_nav_links">
              <a class="nav-link custom_nav_links holde_dropeDown" href="#">
                Desert Safari Tours
              </a>
              <div className="drop_down_desert">
                {
                  desertSefariArray.map((data)=>{
                    return(
                      <>
                     <Link Link to="/detail-page" className='link-clas' state={data}> <div className="drop_donw_conent">{data.name}</div></Link>
                      
                      </>
                    )
                  })
                }
              </div>
            </li>
            <li class="nav-item custom_nav_links">
              <a class="nav-link custom_nav_links holde_dropeDown" href="#">
                {" "}
                Dhow Cruise Dubai
              </a>
              <div className="drop_down_dhow">
                {
                  DhowCruiseArray.map((data)=>{
                    return(
                      <>
                      <Link Link to="/detail-page" className='link-clas' state={data}>  <div className="drop_donw_conent">{data.name}</div></Link> 
                      </>
                    )
                  })
                }
              </div>
            </li>
            <li class="nav-item custom_nav_links">
              <a class="nav-link custom_nav_links holde_dropeDown" href="#">
                UAE City Tours
              </a>
              <div className="drop_down_city">
                {
                  cityTourArray.map((data)=>{
                    return(
                      <>
                      <Link Link to="/detail-page" className='link-clas' state={data}>  <div className="drop_donw_conent">{data.name}</div></Link> 
                      
                      </>
                    )
                  })
                }
              </div>
            </li>
            <li class="nav-item custom_nav_links">
              <Link class="nav-link custom_nav_links holde_dropeDown" to="/combo-deals">
                Combo Deals
              </Link>
              {/* <div className="drop_down_desert">
                {
                  desertSefariArray.map((data)=>{
                    return(
                      <>
                      <div className="drop_donw_conent">{data.name}</div>
                      
                      </>
                    )
                  })
                }
              </div> */}
            </li>
          
            <li class="nav-item custom_nav_links">
              <Link to="/group-booking" class="nav-link custom_nav_links" href="#">
                Grop Booking
              </Link>
              {/* <div className="drop_down_tickets">
                {
                  ticketAdvanureArray.map((data)=>{
                    return(
                      <>
                      <div className="drop_donw_conent">{data.name}</div>
                      
                      </>
                    )
                  })
                }
              </div> */}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
