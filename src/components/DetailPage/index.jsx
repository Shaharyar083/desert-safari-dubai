import React from 'react'
import Header from '../Header'
import "./detail.css"
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { useLocation } from 'react-router-dom';
import { BsWhatsapp } from 'react-icons/bs';
import { MdMarkEmailRead } from 'react-icons/md';
import { SiMinutemailer } from 'react-icons/si';

const DetailPage = () => {
  const location = useLocation()
  const cardData = location?.state
  console.log("==========check data", location.state)
  return (
    <>
      <Header />
      <div className='detail_page_hero_section' style={{ backgroundImage: `url(${cardData?.image})`, backgroundSize: "100%", backgroundPosition: "center", height: "50vh" }} >
        <div className='hero_headings'>{cardData?.name}</div>
      </div>
      <div className='email_num_wrapper'>
        <div></div>
        <div className='detail_email'>
          <div className='wp1'><div ><BsWhatsapp /></div>  +971 52 517 9596</div>
          <div className='wp1'><div><MdMarkEmailRead /></div>  abc@gmail.com</div>
        </div>
      </div>
      <div className='container-fluid custom_container mt-5'>
        <div className='detail_page_content_wrapper'>
          <div className='left_section'>  <div className='detail_card_heading'>{cardData?.name}</div>
            <div className='seprator'></div>
            {cardData?.size1 && <div className='size_wrapper'>
         <div className='size_name'>{cardData?.size1}</div>
         {cardData?.size1 && <div className='size_name'>45 Ft luxury Yacht in Dubai </div>}
         {cardData?.size1 && <div className='size_name'>50 Ft luxury Yacht in Dubai </div>}
         {cardData?.size1 && <div className='size_name'>55 Ft luxury Yacht in Dubai </div>}
         {cardData?.size1 && <div className='size_name'>80 Ft luxury Yacht in Dubai </div>}
         {cardData?.size1 && <div className='size_name_contact'>Contact us for more info </div>}
         </div>}
            <div className='para_content1 '>{cardData?.desription}!</div>


            <div className='para_points_tags'>Inclusions & Exclusions:</div>

            <div className='points_wrapper'>
              <div className='point_1'>
                <div><IoMdCheckmarkCircleOutline className='mark_icon mt-3' /></div>
                <div className='points_content ml-2 mt-2'>{cardData?.ofers1}</div>
              </div>
              <div className='point_1'>
                <div><IoMdCheckmarkCircleOutline className='mark_icon' /></div>
                <div className='points_content ml-2'>{cardData?.ofers2}</div>
              </div>
              <div className='point_1'>
                <div><IoMdCheckmarkCircleOutline className='mark_icon' /></div>
                <div className='points_content ml-2'> {cardData?.ofers3}
                </div>
              </div>
              <div className='point_1'>
                <div><IoMdCheckmarkCircleOutline className='mark_icon' /></div>
                <div className='points_content ml-2'> {cardData?.ofers4}</div>
              </div>
              {cardData?.ofers5 && <div className='point_1'>
                <div><IoMdCheckmarkCircleOutline className='mark_icon' /></div>
                <div className='points_content ml-2'>  {cardData?.ofers5}</div>
              </div>}
              {cardData?.ofers6 && <div className='point_1'>
                <div><IoMdCheckmarkCircleOutline className='mark_icon' /></div>
                <div className='points_content ml-2'>  {cardData?.ofers6}
                </div>
              </div>}
              {cardData?.ofers7 && <div className='point_1'>
                <div><IoMdCheckmarkCircleOutline className='mark_icon' /></div>
                <div className='points_content ml-2'>  {cardData?.ofers7}
                </div>
              </div>}
              {cardData?.ofers8 && <div className='point_1'>
                <div><IoMdCheckmarkCircleOutline className='mark_icon' /></div>
                <div className='points_content ml-2'>  {cardData?.ofers8}
                </div>
              </div>}
              {cardData?.ofers9 && <div className='point_1'>
                <div><IoMdCheckmarkCircleOutline className='mark_icon' /></div>
                <div className='points_content ml-2'>  {cardData?.ofers9}
                </div>
              </div>}
              {cardData?.ofers10 && <div className='point_1'>
                <div><IoMdCheckmarkCircleOutline className='mark_icon' /></div>
                <div className='points_content ml-2'>  {cardData?.ofers10}
                </div>
              </div>}
              {cardData?.ofers11 && <div className='point_1'>
                <div><IoMdCheckmarkCircleOutline className='mark_icon' /></div>
                <div className='points_content ml-2'>  {cardData?.ofers11}
                </div>
              </div>}
              {cardData?.ofers12 && <div className='point_1'>
                <div><IoMdCheckmarkCircleOutline className='mark_icon' /></div>
                <div className='points_content ml-2'>  {cardData?.ofers12}
                </div>
              </div>}



            </div>
             <div className='para_content1 mt-5'>{cardData?.desr2}</div>
            {cardData?.SAFETY && <div className='para_points_tags'>{cardData?.SAFETY}</div>}
            {cardData?.SAFETYData && <div className='para_content1'>{cardData?.SAFETYData}</div>}
            {cardData?.MUSTDO && <div className='para_points_tags'>{cardData?.MUSTDO}</div>}
            {cardData?.MUSTDOData && <div className='para_content1'>{cardData?.MUSTDOData}</div>}
            {cardData?.CAMELTREK && <div className='para_points_tags'>{cardData?.CAMELTREK}
            </div>}
            {cardData?.CAMELTREKData && <div className='para_content1'>{cardData?.CAMELTREKData}
            </div>}
            <a className='text_decu' href="mailto:someone@example.com">
              <div className='email_section'><span style={{ color: "black", fontWeight: "700", fontSize: "18px" }}>EMAIL US FOR RATES  &nbsp;&nbsp;</span>
                Please provide us with date and number of people</div></a>
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

export default DetailPage