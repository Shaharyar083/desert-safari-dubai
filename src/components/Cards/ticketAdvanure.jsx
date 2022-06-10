import React from 'react'
import "../Cards/card.css"
import cardImage from "../../assets/images/cardImg.jpg"
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'

const TicketAdvanure = () => {
    const ticketAdvanureArray = useSelector((state) => state.AllheaderFunctionality.ticketAdvanureArray)
    return (
        <>
            <div className='container-fluid custom_container mt-5'>
                <div className='dersert_heading shadow'>Popular Dubai Activities </div>
                <div className='heading_seprator'></div>
                <div className='card_container'>
                    {
                        ticketAdvanureArray.slice(0, 4).map((data) => {
                            return (
                                <>

                                    <div className='card_wrapper shadow' data-toggle="modal" data-target="#exampleModalCenter">
                                        <div>
                                            <img src={data.image} className="card_image img-fluid" />
                                        </div>
                                        <div className='time_sechudle'>{data.name}</div>
                                        <div className='sep_card'></div>
                                        <div className='desert_info'> {data.totalGuest}</div>

                                        <div className='more_btn_wrapper'>
                                            <div>
                                                {/* <div className='price_tag'>Live Price</div> */}
                                                <div className='desert_price'>AED {data.price}</div>
                                            </div>
                                            <div className='More_btn'>Book Now</div>
                                        </div>
                                    </div>


                                </>
                            )
                        })
                    }



                </div>
            </div>




            <div class="modal fade custom_modal" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                    <button type="button" class="close close_modal mt-2" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        <div class="modal-body d-flex justify-content-center">
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

                                    <div className='form_btn'>Submit</div>


                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default TicketAdvanure