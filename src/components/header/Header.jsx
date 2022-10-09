import React, { useEffect } from 'react';
import './Header.css';
import { Typewriter } from 'react-simple-typewriter';
import Aos from 'aos';
import "aos/dist/aos.css";
import { greet } from './greet';
import Me from '../../assets/my-img1.png';
import HeaderSocials from './HeaderSocials';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';

const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <header>
        <div className="container header-container">
        <h4 className="text-light">Welcome and { greet } ,</h4>
        <h1>I'm <Typewriter 
        words={['Hruthvik Bhargav' , 'Full Stack Developer']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
           /></h1>
        
        
        
        <div className="me">
          <div data-aos="fade-down-right"
               className="me-img">
            <img src={ Me } alt="myPic" />
          </div>
        </div>
        <HeaderSocials />
        <a data-aos="fade-down" href="#Contact" className="scroll__down"><BsFillArrowDownCircleFill /></a>

        </div>
    </header>
  )
}

export default Header