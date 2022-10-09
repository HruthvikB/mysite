import React, { useEffect } from 'react';
import './Contact.css';
import{ ContactForm } from './ContactForm';
import Aos from 'aos';
import "aos/dist/aos.css";
import { MdEmail } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs';


const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  
  return (
    <section id='Contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
           <article data-aos="zoom-in-up" className='contact__option'>
            <MdEmail className='contact__icon'/>
            <h4>E-Mail</h4>
            <h5>hruthvikbhargav@gmail.com</h5>
            <a href='mailto:hruthvikbhargav@gmail.com'>Send E-Mail</a>
           </article>
           <article data-aos="zoom-in-up" className='contact__option'>
           < FiPhoneCall className='contact__icon'/>
            <h4>Call-Me</h4>
            <h5>+91 6362463310</h5>
            <a href='tel:+91 6362463310'>Let's Talk</a>
           </article>
           <article data-aos="zoom-in-up" className='contact__option'>
            <BsWhatsapp className='contact__icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 6362463310</h5>
            <a href='https://api.whatsapp.com/send?phone=916362463310' target="_blank" rel="noopener noreferrer">Send a Message</a>
           </article>
           </div>
           < ContactForm />
      </div>
    </section>
  )
}

export default Contact