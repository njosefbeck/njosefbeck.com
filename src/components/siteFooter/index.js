import React from "react";
import './sitefooter.scss';

export default (props) => (
  <footer className="SiteFooter">
    &copy; {`${new Date().getFullYear()} Nathan Beck`}
  </footer>
);