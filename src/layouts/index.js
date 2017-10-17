import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const Header = () => (
  <header>
    <h1 className="logo"><Link to="/">njosefbeck.com</Link></h1>
  </header>
);

const Footer = () => (
  <footer>
    &copy; {`${new Date().getFullYear()} Nathan Beck`}
  </footer>
);

const TemplateWrapper = ({ children }) => (
  <div className="app">
    <Helmet
      title="njosefbeck.com | St. Louis-based web and iOS developer"
      meta={[
        { name: 'description', content: 'Portfolio website for Nathan Beck, a web and iOS developer based in St. Louis, MO, USA' },
      ]}
    />
    <Header />
    {children()}
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
