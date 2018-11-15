import React from "react";
import { Link } from "gatsby";
import './sitenav.scss';

export default (props) => (
  <nav className="SiteNav">
    <ul>
      <li><Link to="/blog">Blog</Link></li>
    </ul>
  </nav>
);