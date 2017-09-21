import React from 'react'
import Link from 'gatsby-link';
import logo from './logo.svg';
import './header.scss';

const Header = () => (
  <header className="global" ui-view="header" autoscroll="true">
    <img src={logo} className="logo" alt="logo" />
    <Link to="/" className="page-name">Quizzelydoo</Link>
    <div className="profile-menu">
      <Link to="/profile/" className="profilepage">Profile</Link>
    </div>
      <input type="text" name="search" placeholder="Search" className="searchbar" >
      </input>
  </header>
)

export default Header;
