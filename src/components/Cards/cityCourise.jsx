import React from 'react'
import "../Cards/card.css"
import cardImage from "../../assets/images/cardImg2.jpg"
import {useDispatch,useSelector} from "react-redux"
import { Link } from 'react-router-dom'

const CardsAboutDesrtSefari3 = () => {
    const desertSefariArray=useSelector((state)=>state.AllheaderFunctionality.desertSefariArray)
  

    return (
        <>
            <div className='container-fluid custom_container mt-5'> 
            <div className='dersert_heading shadow'>Desert Sefari</div>
            <div className='heading_seprator'></div>
               <Link to="detail-page" className='link-clas'>
               <div className='card_container'>
                  {desertSefariArray.slice(0,4).map((data)=>{
                      return(
                          <>
                          
                    <Link to="detail-page" className='link-clas' state={data}>
                    <div className='card_wrapper shadow'>
                        <div>
                            <img src={data.image} className="card_image img-fluid" />
                        </div>
                        <div className='time_sechudle'>{data.deserName}</div>
                        <div className='sep_card'></div>
                        <div className='desert_info'>{data.timeAndDate}</div>
                      
                        <div className='more_btn_wrapper'>
                            <div>
                
                                <div className='desert_price'>AED {data.price}</div>
                            </div>
                            <div className='More_btn'>Book Now</div>
                        </div>
                    </div>
                    </Link>
                          
                          </>
                      )
                  }) }
                 
                  
                </div>
               </Link>
            </div>

        </>
    )
}

export default CardsAboutDesrtSefari3