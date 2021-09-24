import React from 'react';
import './Navbar.css';
import Logo from './logo.svg';
import Button from '../Button';
import Hamburger from './Hamburger.svg';

export default function Navbar() {
  return (
    <div className="nav" id="myNav">
      <a href="#home">
        <img src={Logo} alt="Logo" />
      </a>

      {/*This is Comment*/}

      <div className="navlist">
        <a href="#pricing">Pricing</a>
        <a href="#product">Product</a>
        <a href="#about">About Us</a>
        <a href="#carrers">Carrers</a>
        <a href="#community">Community</a>
        <a href="#javascript" className="icon" onClick="myFunction()">
          <img src={Hamburger} alt="Hamburger menu" />
          <i className="fa fa-bars"></i>
        </a>
      </div>

      <Button />
    </div>
  );
}
