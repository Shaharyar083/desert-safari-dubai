import React  from 'react'
import Header from '../Header'
import "./combodeal.css"
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { useLocation } from 'react-router-dom';
import { BsWhatsapp } from 'react-icons/bs';
import { MdMarkEmailRead } from 'react-icons/md';
import { SiMinutemailer } from 'react-icons/si';
import { TiTick } from 'react-icons/ti';
import { useState } from 'react'
import Image1 from "../../assets/images/slider1.jpg"

const ComboDeals = () => {
    const [isActive,setIsActive]=useState("1")


    return (
        <>
            <Header />
            <div className='detail_page_hero_section' >
                <div className='hero_headings' style={{ backgroundImage: `url(${Image1})`, backgroundSize: "cover", backgroundPosition: "center", height: "50vh" , backgroundRepeat:"no-repeat" }}>Combo Deals</div>
            </div>
            <div className='email_num_wrapper'>
                <div></div>
                <div className='detail_email'>
                    <div className='wp1'><div ><BsWhatsapp /></div>  +971 52 517 9596</div>
                    <div className='wp1'><div><MdMarkEmailRead /></div>  abc@gmail.com</div>
                </div>
            </div>
            <div className='container-fluid custom_container mt-5'>
                <div className='deals_wrapper'>
                    <div className='deails_type_wrapper'>

                        <div className={isActive=="1"?'deals_heading_wrapper_active':'deals_heading_wrapper'} onClick={()=>setIsActive("1")}>Desert Sefari</div>
                        <div className={isActive=="2"?'deals_heading_wrapper_active':'deals_heading_wrapper'} onClick={()=>setIsActive("2")}>Trio</div>
                    </div>
                    <div className={isActive=="3"?'deals_heading_wrapper_active':'deals_heading_wrapper'} onClick={()=>setIsActive("3")}>
                        DXB + Burj Khilifa
                    </div>
                    <div className={isActive=="4"?'deals_heading_wrapper_active':'deals_heading_wrapper'} onClick={()=>setIsActive("4")}>
                        Dubai City Tour + Dhow Creek
                    </div>
                    <div className={isActive=="5"?'deals_heading_wrapper_active':'deals_heading_wrapper'} onClick={()=>setIsActive("5")}>
                        Dubai City Tour + AUH City Tour
                    </div>
                </div>


                <div className='detail_page_content_wrapper deals_main'>
                    <div className='deals_deatils_wrapper'>
                        <div className='buy_one'>Buy 1 Get One Free</div>
                        <div className='deals_tag'>Desert Sefari+ 20 Minute Quad Bike</div>
                        <div className='combo_tour_details'>
                            <div className='tour_inc'>Tour Inclusive</div>
                            <hr style={{color:"white"}}/>
                            <div className='combo_tour_points'>
                                <div className='com_points_text_wrapper'>
                                    <div>    <TiTick /> Pickup By 4X4</div>
                                    <div>    <TiTick /> Drop Off</div>
                                    <div>    <TiTick /> 20 Minute Dune Bashing</div>
                                    <div>    <TiTick /> Wellcome Drink</div>
                                    <div>    <TiTick /> Live BBQ Dinner</div>
                                    <div>    <TiTick /> Tanure Dannce</div>
                                    <div>    <TiTick /> Fire Show</div>
                                   
                                </div>
                                <div className='com_points_text_wrapper'>
                                    <div>    <TiTick /> Free Water & Soft Drink</div>
                                    <div>    <TiTick /> Sabd Boarding</div>
                                    <div>    <TiTick /> Camel Ride</div>
                                    <div>    <TiTick /> Live Belly Dannce</div>
                                    <div>    <TiTick /> Dinner</div>
                                    <div>    <TiTick /> Sunset Photo Shop</div>
                                    <div>    <TiTick /> Henna Painting</div>
                                  
                                </div>
                            </div>
                            <div className='deals_bottom'>
                            <div className='wp12'><div ><BsWhatsapp /></div>  +971 52 517 9596</div>
                    <div className='wp12'><div><MdMarkEmailRead /></div>  abc@gmail.com</div>
                            </div>
                        </div>

                    </div>

                    <div >
                        <div className='form_wrapper'>
                            <div className='conatact_forom_inner'>
                                <div className='form_heading'>Booking Your Tour</div>
                                <div className='input_wrapper'><input placeholder='Please enter your name' className='input_self' /></div>
                                <div className='input_wrapper'><input placeholder='Please enter your email' className='input_self' /></div>
                                <div className='small_inputs_wrapper'>
                                    <div className='input_wrapper'><input placeholder='Country code' className='input_self' /></div>
                                    <div className='input_wrapper'><input placeholder='Phone num' className='input_self' /></div>
                                </div>
                                <div className='small_inputs_wrapper'>
                                    <div className='input_wrapper'><input type="date" className='input_self' /></div>
                                    <div className='input_wrapper'><input placeholder='Num of tickets' className='input_self' /></div>
                                </div>


                                <textarea class="form-control custom_text" placeholder='Type your message!' id="exampleFormControlTextarea1" rows="3"></textarea>

                                <div className='form_btn'>  Send <div className='mt-2'><SiMinutemailer /></div></div>


                            </div>

                        </div>

                    </div>
                </div>


            </div>


        </>
    )
}

export default ComboDeals