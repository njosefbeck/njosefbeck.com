import React from "react";
import { Link } from "gatsby";
import './siteheader.scss';
import SiteNav from '../siteNav';

export default (props) => (
  <header className="SiteHeader">
    <SiteNav />
    <h1><Link to="/">{props.header}</Link></h1>
    <p className="byline">{props.byline}</p>
  </header>
);