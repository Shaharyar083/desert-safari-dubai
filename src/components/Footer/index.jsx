import React from "react";
import "../Footer/footer.css";
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';


const Footer = () => {
  return (
    <>
      <div className="footer_wrapper">
        <div className="footer_content_wrapper">
          <div className="footer_links"> <div style={{marginTop:"5px"}}><AiOutlineMail/></div><div> Email Us</div></div>
          <div className="footer_links"> <div style={{marginTop:"5px"}}><BsWhatsapp/></div> +971-56-5364-484 </div>
          <div className="footer_links"> <div style={{marginTop:"5px"}}><BsFillTelephoneFill/></div> +971-4-2087-466 </div>
          <div className="footer_links"> About Us </div>
          <div className="footer_links"> FAQ's </div>
          <div className="footer_links"> Contact Us </div>
        </div>
        <div className="terms_con">© Copyright <span style={{color:"black",fontWeight:"600"}}>Desert Safari Dubai</span>. All Rights Reserved.</div>
      </div>
    </>
  );
};

export default Footer;
