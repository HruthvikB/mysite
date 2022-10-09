import React, { useEffect } from 'react';
import './About.css';
import Me from '../../assets/mypic.png';
import Aos from 'aos';
import "aos/dist/aos.css";
import { age } from './DOB';
import { MdDateRange } from 'react-icons/md';
import { FaAward } from 'react-icons/fa';
import  { TbZodiacGemini } from 'react-icons/tb';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section id='About'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
       <div className='about__me'>
        <div className='about__me-image'>
          <img src={ Me } alt='my-pic' />
      </div>
      </div>
      <div className='about__content'>
          <div className='about__cards'>
            <article data-aos="zoom-in-down" className='about__card'>
            < MdDateRange className='about__icon'/>
            <h5>Date Of Birth</h5>
            <small>10-o4-2000</small> <br/>
            <small>age: { age }</small>
            </article>
            <article data-aos="zoom-in" className='about__card'>
            < FaAward className='about__icon'/>
            <h5>Graduation</h5>
            <small>University of Mysore</small>
            </article>
            <article data-aos="zoom-in-up" className='about__card'>
            <TbZodiacGemini className='about__icon'/>
            <h5>Zodiac Sign</h5>
            <small>GEMINI</small> <br/>
            </article>
            </div>
            <p>
            <span>Hobbies: </span> Swimming, Cooking, Traveling and Learning a New Skill <br/> <br/>
            <span>Soft-Skills:</span> Fast-Learner, Adaptability and Persuasion
            </p>
          </div>
        
      </div>
    </section>
  )
}

export default About