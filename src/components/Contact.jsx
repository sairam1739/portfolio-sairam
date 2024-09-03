import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
const Contact = () => {
  return (
    <>
    <div className="container contact" id='contact'>
      <h1>CONTACT ME</h1>
      <div className="contact-icon"
      data-aos="zoom-in-up"
    data-aos-duration="1000"
      >
        <a href='https://www.instagram.com/' target='_blank' className="items">
          <FaInstagram  className='icons'/>
        </a>
        <a href='https://www.facebook.com/' target='_blank' className="items">
          <CiFacebook  className='icons'/>
        </a> 
        <a href='https://www.linkedin.com/in/andesairam/' target='_blank' className="items">
          <AiOutlineLinkedin className='icons' />
        </a> 
        <a href='https://github.com/sairam1739' target='_blank' className="items">
          <FaGithub className='icons'/> 
        </a> 
        <a href='mailto:sai1739sairam@gmail.com' target='_blank' className="items">
         <BiLogoGmail className='icons' />
        </a>
      </div>
    </div>
    </>
  )
}

export default Contact