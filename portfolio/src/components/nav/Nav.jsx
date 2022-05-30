/* eslint-disable no-alert */

import React from 'react';
import './nav.css';
import { FaHome } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaBookOpen } from 'react-icons/fa';
import { RiServiceFill } from 'react-icons/ri';
import { AiFillMessage } from 'react-icons/ai';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  // const ScrollToTop = () => {
  //   return window.scrollTo({ top: 0, behavior: 'smooth' });
  // };

  return (
    <nav>
      <a
        href='!#'
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <FaHome />
      </a>
      <a
        href='#about'
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <FaUser />
      </a>
      <a
        href='#experience'
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <FaBookOpen />
      </a>
      <a
        href='#services'
        onClick={() => setActiveNav('#service')}
        className={activeNav === '#service' ? 'active' : ''}
      >
        <RiServiceFill />
      </a>
      <a
        href='#contact'
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <AiFillMessage />
      </a>
    </nav>
  );
};

export default Nav;
