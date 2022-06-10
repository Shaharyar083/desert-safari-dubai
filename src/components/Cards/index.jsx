import React from 'react'
import "../Cards/card.css"
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'


const CardsAboutDesrtSefari = () => {
    const cityTourArray = useSelector((state) => state.AllheaderFunctionality.cityTourArray)
    console.log("============desertSefariArray",cityTourArray)
    return (
        <>
            <div className='container-fluid custom_container mt-5'>
            <div className='dersert_heading shadow'>UAE City Tour's</div>
            <div className='heading_seprator'></div>
                <div className='card_container'>
                    {
                        cityTourArray?.slice(0,4).map((data) => {
                            return (
                                <>
                                  <Link to="detail-page" state={data} className='link-clas'>
                                  <div className='card_wrapper shadow'>
                                        <div>
                                            <img src={data.image} className="card_image img-fluid" />
                                        </div>
                                        <div className='time_sechudle'>{data.name}</div>
                                        <div className='sep_card'></div>
                                        <div className='desert_info'>{data.totalGuest}</div>

                                        <div className='more_btn_wrapper'>
                                            <div>
                                                {/* <div className='price_tag'>Live Price</div> */}
                                                <div className='desert_price'>AED {data.price}</div>
                                            </div>
                                            <div className='More_btn'>Book Now</div>
                                        </div>
                                    </div>
                                  </Link>


                                </>
                            )
                        })
                    }
                  
                </div>
            </div>

        </>
    )
}

export default CardsAboutDesrtSefari