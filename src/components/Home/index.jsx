import React from 'react'
import Header from '../Header'
import "./home.css"
import CardsAboutDesrtSefari from "../Cards"
import CardsAboutDesrtSefari2 from "../Cards/creekCourise"
import CardsAboutDesrtSefari3 from "../Cards/cityCourise"
import { BsWhatsapp } from 'react-icons/bs';
import TicketAdvanure from "../Cards/ticketAdvanure"
import { MdMarkEmailRead } from 'react-icons/md';
import { SiMinutemailer } from 'react-icons/si';
import SliderSection from "../Slider"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <Header />
      <div className='banner_wrapper'>
      </div>
      <div className='parent_bg_wrapper shadow '>
        <div className='bg_wrapper'>
          <div className='email_num_wrapper'>
            <div className='company_tag_nam'>Dubai Best Desert Sefari</div>
            <Link to="/combo-deals" className='link-clas'><div className='ofer_buy'>Buy One Get One Free</div></Link>
            <div className='detail_email'>
              <div><span ><BsWhatsapp /></span> +971 525179596</div>
              <div><span className='mt-3'><MdMarkEmailRead /></span>  abc@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
      <SliderSection />
      {/* <========Dsert Sefari===========B> */}
      <CardsAboutDesrtSefari3 />
      {/* <========Dbshow courise===========B> */}
      <CardsAboutDesrtSefari2 />
      {/* /* <========city tour===========B> */}
      <CardsAboutDesrtSefari />
      {/* /* <========Tikect BAdvenure===========B> */}

      <TicketAdvanure />


    </>
  )
}

export default Home