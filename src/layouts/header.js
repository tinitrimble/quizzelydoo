import React from 'react'
import logo from './logo.svg';
import './header.scss';

const Header = () => (
  <header className="global">
    <img src={logo} className="logo" alt="logo" />
    <h2 className="page-name">Quizzelydoo</h2>
    <div className="profile-menu">
      <a href="www.google.com" className="profile-page">Profile page</a>
    </div>
    <input type="text" name="search" placeholder="Search" className="searchbar" >
    </input>
  </header>
)

export default Header;
