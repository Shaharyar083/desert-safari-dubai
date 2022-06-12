import React, { useState } from "react";
import Header from "../Header";
import "./groupbooking.css";
import { BsWhatsapp } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";
import axios from "axios";
const GroupBooking = () => {
  const [state, setState] = useState({});
  const [show, setShow] = useState({});

  const handleInputs = (event, key) => {
    setState({
      ...state,
      [key]: {
        ...state[key],
        [event.target.name]: event.target.value,
      },
    });
  };

  const handleShowForm = ({ key, value }) => {
    if (Object.keys(value)?.length > 0)
      setShow({
        ...show,
        [key]: value,
      });
  };

  const submit = async () => {
    await axios.post("http://localhost:6000/booking/addbooking", state);
    setState({});
    setShow({});
  };

  return (
    <>
      <Header />

      <div className="group_booking_wrapper">
        <div style={{width:"100%"}}>
          <div className="booking_card_wrapper">
            {/* info */}
            <div className="bookingcard ">
              <div className="form_input_wrapper">
                <div className="input_container">
                  <input
                    className="form_input"
                    placeholder="Your Name"
                    name="name"
                    value={state?.info?.name}
                    onChange={(e) => handleInputs(e, "info")}
                  />
                </div>
              </div>
              <div className="form_input_wrapper mt-3">
                <div className="input_container">
                  <input
                    className="form_input"
                    placeholder="Your email"
                    name="email"
                    value={state?.info?.email}
                    onChange={(e) => handleInputs(e, "info")}
                  />
                </div>
              </div>
              <div className="form_input_wrapper mt-3">
                <div className="input_container1">
                  <input
                    className="form_input"
                    placeholder="Your City"
                    name="city"
                    value={state?.info?.city}
                    onChange={(e) => handleInputs(e, "info")}
                  />
                </div>
                <div className="input_container1">
                  <input
                    className="form_input"
                    placeholder="Your Contact#"
                    name="contact"
                    value={state?.info?.contact}
                    onChange={(e) => handleInputs(e, "info")}
                  />
                </div>
              </div>
              <div className="form_input_wrapper mt-3">
                <div className="input_container">
                  <input
                    className="form_input"
                    placeholder="Your Country"
                    name="country"
                    value={state?.info?.country}
                    onChange={(e) => handleInputs(e, "info")}
                  />
                </div>
                {/* <div><input placeholder='Your Contact#' /></div> */}
              </div>
              <div
                className="btn btn-block enter_btn"
                onClick={() =>
                  handleShowForm({ key: "info", value: state?.info })
                }
              >
                Enter
              </div>
            </div>

            {/* tour */}
            <div className="bookingcard ">
              <div className="form_input_wrapper">
                <div className="input_container">
                  <select
                    className="form_input"
                    name="type"
                    value={state?.tour?.type}
                    onChange={(e) => handleInputs(e, "tour")}
                  >
                    <option className="opt_text">Tour Type</option>
                    <option className="opt_text">Private</option>
                    <option className="opt_text">Group</option>
                  </select>
                </div>
              </div>
              <div className="form_input_wrapper mt-3">
                <div className="input_container">
                  <input
                    className="form_input"
                    type="date"
                    name="date"
                    value={state?.tour?.date}
                    onChange={(e) => handleInputs(e, "tour")}
                  />
                </div>
              </div>

              <div className="form_input_wrapper mt-3">
                <div className="input_container">
                  <input
                    className="form_input"
                    placeholder="Total Person"
                    name="person"
                    value={state?.tour?.person}
                    onChange={(e) => handleInputs(e, "tour")}
                  />
                </div>
                {/* <div><input placeholder='Your Contact#' /></div> */}
              </div>
              <div
                className="btn btn-block enter_btn"
                onClick={() =>
                  handleShowForm({ key: "tour", value: state?.tour })
                }
              >
                Enter
              </div>
            </div>

            {/* hotel */}
            <div className="bookingcard ">
              <div className="input_container">
                <select
                  className="form_input"
                  name="hotelStar"
                  value={state?.hotel?.hotelStar}
                  onChange={(e) => handleInputs(e, "hotel")}
                >
                  <option className="opt_text">Select Hotel</option>
                  <option className="opt_text">5 star</option>
                  <option className="opt_text">5 star</option>
                  <option className="opt_text">5 star</option>
                  <option className="opt_text">5 star</option>
                  <option className="opt_text">4 star</option>
                </select>
              </div>
              <div className="form_input_wrapper mt-3">
                <div className="input_container">
                  <input
                    className="form_input"
                    type="date"
                    name="date"
                    value={state?.hotel?.date}
                    onChange={(e) => handleInputs(e, "hotel")}
                  />
                </div>
                {/* <div><input placeholder='Your Contact#' /></div> */}
              </div>
              <div className="input_container mt-3">
                <select
                  className="form_input"
                  name="room"
                  value={state?.hotel?.room}
                  onChange={(e) => handleInputs(e, "hotel")}
                >
                  <option className="opt_text">Room Type</option>
                  <option className="opt_text">Single Bed</option>
                  <option className="opt_text">Double Bed</option>
                  <option className="opt_text">Double Sharing</option>
                  <option className="opt_text">Twin Sharing</option>
                  <option className="opt_text">Extra Bed</option>
                </select>
              </div>

              <div className="form_input_wrapper mt-3">
                <div className="input_container">
                  <input
                    className="form_input"
                    placeholder="Total Person"
                    name="person"
                    value={state?.hotel?.person}
                    onChange={(e) => handleInputs(e, "hotel")}
                  />
                </div>
                {/* <div><input placeholder='Your Contact#' /></div> */}
              </div>
              <div
                className="btn btn-block enter_btn"
                onClick={() =>
                  handleShowForm({ key: "hotel", value: state?.hotel })
                }
              >
                Enter
              </div>
            </div>

            {/* safari */}
            <div className="bookingcard ">
              <div className="input_container">
                <select
                  className="form_input"
                  name="safari"
                  value={state?.safari?.safari}
                  onChange={(e) => handleInputs(e, "safari")}
                >
                  <option className="opt_text">Safari</option>
                  <option className="opt_text">Morning Safari</option>
                  <option className="opt_text">Evening Safari</option>
                  <option className="opt_text">Overnight Safari</option>
                  <option className="opt_text">Dune Buggy Safari</option>
                  <option className="opt_text">Quad Bike Safari</option>
                  <option className="opt_text">Camel Ride</option>
                  <option className="opt_text">Dinner in Desert</option>
                </select>
              </div>
              <div className="form_input_wrapper mt-3">
                <div className="input_container">
                  <input
                    className="form_input"
                    type="date"
                    name="date"
                    value={state?.safari?.date}
                    onChange={(e) => handleInputs(e, "safari")}
                  />
                </div>
                {/* <div><input placeholder='Your Contact#' /></div> */}
              </div>

              <div className="form_input_wrapper mt-3">
                <div className="input_container">
                  <input
                    className="form_input"
                    placeholder="Total Person"
                    name="person"
                    value={state?.safari?.person}
                    onChange={(e) => handleInputs(e, "safari")}
                  />
                </div>
                {/* <div><input placeholder='Your Contact#' /></div> */}
              </div>
              <div
                className="btn btn-block enter_btn"
                onClick={() =>
                  handleShowForm({ key: "safari", value: state?.safari })
                }
              >
                Enter
              </div>
            </div>

            {/* cruises */}
            <div className="bookingcard ">
              <div className="input_container">
                <select
                  className="form_input"
                  name="cruise"
                  value={state?.cruise?.cruise}
                  onChange={(e) => handleInputs(e, "cruise")}
                >
                  <option className="opt_text">Cruises</option>
                  <option className="opt_text">Dhow Creek Cruise</option>
                  <option className="opt_text">Marina Cruise </option>
                </select>
              </div>
              <div className="form_input_wrapper mt-3">
                <div className="input_container">
                  <input
                    className="form_input"
                    type="date"
                    name="date"
                    value={state?.cruise?.date}
                    onChange={(e) => handleInputs(e, "cruise")}
                  />
                </div>
                {/* <div><input placeholder='Your Contact#' /></div> */}
              </div>

              <div className="form_input_wrapper mt-3">
                <div className="input_container">
                  <input
                    className="form_input"
                    placeholder="Total Person"
                    name="person"
                    value={state?.cruise?.person}
                    onChange={(e) => handleInputs(e, "cruise")}
                  />
                </div>
                {/* <div><input placeholder='Your Contact#' /></div> */}
              </div>
              <div
                className="btn btn-block enter_btn"
                onClick={() =>
                  handleShowForm({ key: "cruise", value: state?.cruise })
                }
              >
                Enter
              </div>
            </div>

            {/* yacht */}
            <div className="bookingcard ">
              <div className="input_container">
                <select
                  className="form_input"
                  name="yacht"
                  value={state?.yacht?.yacht}
                  onChange={(e) => handleInputs(e, "yacht")}
                >
                  <option className="opt_text">Yachts</option>
                  <option className="opt_text">44ft</option>
                  <option className="opt_text">45ft</option>
                  <option className="opt_text">50ft</option>
                  <option className="opt_text">55ft</option>
                  <option className="opt_text">80ft</option>
                </select>
              </div>
              <div className="form_input_wrapper mt-3">
                <div className="input_container">
                  <input
                    className="form_input"
                    type="date"
                    name="date"
                    value={state?.yacht?.date}
                    onChange={(e) => handleInputs(e, "yacht")}
                  />
                </div>
                {/* <div><input placeholder='Your Contact#' /></div> */}
              </div>

              <div className="form_input_wrapper mt-3">
                <div className="input_container">
                  <input
                    className="form_input"
                    placeholder="Total Person"
                    name="person"
                    value={state?.yacht?.person}
                    onChange={(e) => handleInputs(e, "yacht")}
                  />
                </div>
                {/* <div><input placeholder='Your Contact#' /></div> */}
              </div>
              <div
                className="btn btn-block enter_btn"
                onClick={() =>
                  handleShowForm({ key: "yacht", value: state?.yacht })
                }
              >
                Enter
              </div>
            </div>

            {/* ticket */}
            <div className="bookingcard ">
              <div className="input_container">
                <select
                  className="form_input"
                  name="ticket"
                  value={state?.ticket?.ticket}
                  onChange={(e) => handleInputs(e, "ticket")}
                >
                  <option className="opt_text">Tickets</option>
                  <option className="opt_text">Burj Khalifa 124th Floor</option>
                  <option className="opt_text">
                    Dubai Aquarium & Underwater Zoo
                  </option>
                  <option className="opt_text">The Dubai Frame</option>
                  {/* <option className='opt_text'>Global Village</option> */}
                  <option className="opt_text">Helicopter Ride</option>
                  <option className="opt_text">Atlantis Aqua venture</option>
                  <option className="opt_text">Wild Wide Water Park</option>
                  <option className="opt_text">Yas Water World</option>
                  <option className="opt_text">Ferrari World Theme Park</option>
                  <option className="opt_text">Ski Dubai</option>
                  <option className="opt_text">Sky Dive</option>
                  <option className="opt_text">Motion gate Dubai</option>

                  <option className="opt_text">Legoland Dubai</option>
                  <option className="opt_text">Dubai Butterfly Garden</option>
                  <option className="opt_text">Dubai Miracle Garden</option>
                  <option className="opt_text">Wonder Bus Tour Dubai</option>
                  <option className="opt_text">The Palm View Tickets</option>
                  <option className="opt_text">laguna Water Park</option>
                  <option className="opt_text">The Green Planet Dubai</option>
                </select>
              </div>
              <div className="form_input_wrapper mt-3">
                <div className="input_container">
                  <input
                    className="form_input"
                    type="date"
                    name="date"
                    value={state?.ticket?.date}
                    onChange={(e) => handleInputs(e, "ticket")}
                  />
                </div>
                {/* <div><input placeholder='Your Contact#' /></div> */}
              </div>

              <div className="form_input_wrapper mt-3">
                <div className="input_container">
                  <input
                    className="form_input"
                    placeholder="Total Person"
                    name="person"
                    value={state?.ticket?.person}
                    onChange={(e) => handleInputs(e, "ticket")}
                  />
                </div>
                {/* <div><input placeholder='Your Contact#' /></div> */}
              </div>
              <div
                className="btn btn-block enter_btn"
                onClick={() =>
                  handleShowForm({ key: "ticket", value: state?.ticket })
                }
              >
                Enter
              </div>
            </div>

            {/* cars */}
            <div className="bookingcard ">
              <div className="input_container">
                <select
                  className="form_input"
                  name="car"
                  value={state?.car?.car}
                  onChange={(e) => handleInputs(e, "car")}
                >
                  <option className="opt_text">Cars</option>
                  <option className="opt_text">Limos</option>
                </select>
              </div>
              <div className="form_input_wrapper mt-3">
                <div className="input_container">
                  <input
                    className="form_input"
                    type="date"
                    name="date"
                    value={state?.car?.date}
                    onChange={(e) => handleInputs(e, "car")}
                  />
                </div>
                {/* <div><input placeholder='Your Contact#' /></div> */}
              </div>

              <div className="form_input_wrapper mt-3">
                <div className="input_container">
                  <input
                    className="form_input"
                    placeholder="Total Person"
                    name="person"
                    value={state?.car?.person}
                    onChange={(e) => handleInputs(e, "car")}
                  />
                </div>
                {/* <div><input placeholder='Your Contact#' /></div> */}
              </div>
              <div
                className="btn btn-block enter_btn"
                onClick={() =>
                  handleShowForm({ key: "car", value: state?.car })
                }
              >
                Enter
              </div>
            </div>

            {/* eat */}
            <div className="bookingcard ">
              <div className="input_container">
                <select
                  className="form_input"
                  name="eat"
                  value={state?.eat?.eat}
                  onChange={(e) => handleInputs(e, "eat")}
                >
                  <option className="opt_text">Lunch’s And Dinner’s</option>
                  <option className="opt_text">Lunch</option>
                  <option className="opt_text">Dinner</option>
                </select>
              </div>
              <div className="input_container mt-3">
                <select
                  className="form_input"
                  name="restaurant"
                  value={state?.eat?.restaurant}
                  onChange={(e) => handleInputs(e, "eat")}
                >
                  <option className="opt_text">Type of Restaurant </option>
                  <option className="opt_text">Indian</option>
                  <option className="opt_text">Italian</option>
                </select>
              </div>
              <div className="form_input_wrapper mt-3">
                <div className="input_container">
                  <input
                    className="form_input"
                    type="date"
                    name="date"
                    value={state?.eat?.date}
                    onChange={(e) => handleInputs(e, "eat")}
                  />
                </div>
                {/* <div><input placeholder='Your Contact#' /></div> */}
              </div>

              <div className="form_input_wrapper mt-3">
                <div className="input_container">
                  <input
                    className="form_input"
                    placeholder="Total Person"
                    name="person"
                    value={state?.eat?.person}
                    onChange={(e) => handleInputs(e, "eat")}
                  />
                </div>
                {/* <div><input placeholder='Your Contact#' /></div> */}
              </div>
              <div
                className="btn btn-block enter_btn"
                onClick={() =>
                  handleShowForm({ key: "eat", value: state?.eat })
                }
              >
                Enter
              </div>
            </div>

            {/* visa */}
            <div className="bookingcard ">
              <div className="input_container">
                <select
                  className="form_input"
                  name="visa"
                  value={state?.visa?.visa}
                  onChange={(e) => handleInputs(e, "visa")}
                >
                  <option className="opt_text">Visa’s </option>
                  <option className="opt_text">Single Short</option>
                  <option className="opt_text">Long Term</option>
                </select>
              </div>

              <div className="form_input_wrapper mt-3">
                <div className="input_container">
                  <input
                    className="form_input"
                    type="date"
                    name="date"
                    value={state?.visa?.date}
                    onChange={(e) => handleInputs(e, "visa")}
                  />
                </div>
                {/* <div><input placeholder='Your Contact#' /></div> */}
              </div>

              <div className="form_input_wrapper mt-3">
                <div className="input_container">
                  <input
                    className="form_input"
                    placeholder="Total Person"
                    name="person"
                    value={state?.visa?.person}
                    onChange={(e) => handleInputs(e, "visa")}
                  />
                </div>
                {/* <div><input placeholder='Your Contact#' /></div> */}
              </div>
              <div
                className="btn btn-block enter_btn"
                onClick={() =>
                  handleShowForm({ key: "visa", value: state?.visa })
                }
              >
                Enter
              </div>
            </div>
          </div>

          <div className="submit" onClick={submit}>
            Submit
          </div>
        </div>

        <div className="side_right">
          <div className="cal_wrapper" style={{ color: "#fff" }}>
            {Object.keys(show)?.length > 0 &&
              Object.keys(show)?.map((parentKey, pIndex) => (
                <div key={pIndex} style={{ marginBottom: "20px" }}>
                  <div>{parentKey}:</div>
                  {Object.keys(show[parentKey])?.map((key, index) => (
                    <div key={index} style={{ color: "#fff" }}>
                      {key}: {show[parentKey][key]}
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupBooking;
