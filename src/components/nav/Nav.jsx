import React from 'react';
import './Nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import { IoMdSchool } from 'react-icons/io';
import { FiPhoneCall  } from 'react-icons/fi';

import { useState } from 'react';


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
      <nav>
        <a href='/#' onClick={() => setActiveNav('#')}  className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
        <a href='#About' onClick={() => setActiveNav('#About')} className={activeNav === '#About' ? 'active' : ''}><AiOutlineUser /></a>
        <a href='#Tech' onClick={() => setActiveNav('#Tech')}  className={activeNav === '#Tech' ? 'active' : ''} ><IoMdSchool /></a>
        <a href='#Contact' onClick={() => setActiveNav('#Contact')}  className={activeNav === '#Contact' ? 'active' : ''}><FiPhoneCall /></a>
      </nav>
  )
}

export default Nav