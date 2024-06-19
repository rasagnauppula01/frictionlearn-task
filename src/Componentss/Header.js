import React from 'react';
import './Header.css';
// import logo2 from "../assets/Vector.jpg"
import logo from "../assets/images/logo.png"

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo1" width={120} height={40} ></img>
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
