import React from 'react';
import Logo from './robinhood.svg';
import './Header.css';
import './App.js';

function Header() {
  return (
    <div className="header-wrapper">
      <div className="header-logo">
        <img src={Logo} width={25} />
      </div>
      <div className="header-search">
        <div className="header-searchContainer">
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header-menuItems">
        <a href="#">Free Stocks</a>
        <a href="#">Portfolio</a>
        <a href="#">Cash</a>
        <a href="#">Messages</a>
        <a href="#">Account</a>
      </div>
    </div>
  );
}

export default Header;
