import React, { useEffect }from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

const HeaderSocials = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div data-aos="fade-up" className='header__social'>
        <a href="https://www.linkedin.com/in/hruthvik-bhargav-30962023b" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/HruthvikB" target="_blank" rel="noopener noreferrer"> <FaGithub /></a>
        <a href="https://www.instagram.com/the_real_h_b" target="_blank" rel="noopener noreferrer"><AiFillInstagram /></a>
    </div>
  )
}

export default HeaderSocials