import React, { useEffect } from 'react';
import './Tech.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import { SiHtml5 } from 'react-icons/si';
import { FaCss3Alt } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { SiBootstrap } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { DiGit } from 'react-icons/di';
import { SiNodedotjs } from 'react-icons/si';
import { SiPython } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { MdOutlineDeveloperMode } from 'react-icons/md';
import { AiOutlineCloudServer } from 'react-icons/ai';

const Tech = () => {
    useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);
    return (
    <section id='Tech'>
      <h5>What Tech I Know</h5>
      <h2>My Skills</h2>

      <div data-aos="flip-right" className='container tech__container'>
        <div  className='tech_frontend'>
        <h3><MdOutlineDeveloperMode /> Frontend Development</h3>
        <div className='tech__content'>
          <article className='tech__details'>
            <SiHtml5  className='icon'/>
            <h4>HTML</h4>
          </article>
          <article className='tech__details'>
            <FaCss3Alt className='icon'/>
            <h4>CSS</h4>
          </article>
          <article className='tech__details'>
            <SiJavascript className='icon'/>
            <h4>JavaScript</h4>
          </article>
          <article className='tech__details'>
            <SiBootstrap className='icon'/>
            <h4>BootStrap</h4>
          </article>
          <article className='tech__details'>
            <SiReact className='icon'/>
            <h4>React.JS</h4>
          </article>
          <article className='tech__details'>
            <DiGit className='icon'/>
            <h4>Git</h4>
          </article>
        </div>

        </div>

        <div data-aos="flip-left" className='tech_backend'>
        <h3>< AiOutlineCloudServer /> Backend Development</h3>
        <div className='tech__content'>
          <article className='tech__details'>
          <SiNodedotjs className='icon'/>
          <h4>Node.JS</h4>
          </article>
          <article className='tech__details'>
          <SiPython className='icon'/>
          <h4>Python </h4>
          </article>
          <article className='tech__details'>
          <SiMysql className='icon'/>
          <h4>MySQL </h4>
          </article>
          <article className='tech__details'>
          <SiMongodb className='icon'/>
          <h4>MongoDB </h4>
          </article>
          
        </div>
          
        </div>
      </div>
    </section>
  )
}

export default Tech