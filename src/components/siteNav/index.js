import React from "react";
import { Link } from "gatsby";
import './sitenav.scss';

export default (props) => (
  <nav className="SiteNav">
    <ul>
      <li><Link to="/resume">Resume</Link></li>
    </ul>
  </nav>
);