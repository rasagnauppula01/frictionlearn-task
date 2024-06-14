import React from 'react';
import './Header.css';

import image1 from "../assets/images/logo.png"
import logoo from "../assets/images/Vector.png"
import logo2 from "../assets/images/img_group_101 (1).png"

const Header = () => {


  return (
    <header className="header">
      <div className="logo">
        <img src={logo2} alt="logo1" width={190} height={65} ></img>
        <span className='inspiration-regular'>Ik developers</span>
      </div>
      <nav>
        <ul>
          <li>About us</li>
          <li>Services</li>
          <li>Case Studies</li>
          <li>Blog</li>
          <li>How it Works</li>
          <li>Hire</li>
        </ul>
      </nav>
      <button>Contact us</button>
    </header>
  );
};

export default Header;
