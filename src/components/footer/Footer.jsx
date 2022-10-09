import React , { useEffect } from 'react';
import './Footer.css';
import { AiFillInstagram } from 'react-icons/ai';
import { SiTwitter } from 'react-icons/si';
import { BsLinkedin } from 'react-icons/bs';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import Aos from 'aos';
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <footer>
      <a data-aos="fade-up" href="/#" className='footer__logo' > <BsFillArrowUpCircleFill /></a>
      <div className='footer__socials'>
        <a href="https://www.instagram.com/the_real_h_b" target="_blank" rel="noopener noreferrer"><AiFillInstagram /></a> &nbsp; &nbsp;
        <a href="https://www.linkedin.com/in/hruthvik-bhargav-30962023b" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a> &nbsp; &nbsp;
        <a href='https://twitter.com/hruthvik1111' target="_blank" rel="noopener noreferrer"><SiTwitter /></a> &nbsp;
        </div>
        <div className='footer__copyright'>
          <small>&copy; {new Date().getFullYear()} Hruthvik Bhargav </small>
        </div>
    </footer>
  )
}

export default Footer