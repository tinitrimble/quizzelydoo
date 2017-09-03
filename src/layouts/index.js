import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import logo from './logo.svg';
import './index.css'
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

const TemplateWrapper = ({ children }) => (
  <div>
      <Helmet
        title="Gatsby Default Starter"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        {children()}
      </div>
    </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
