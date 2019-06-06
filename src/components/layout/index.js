import React from "react";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import SiteHeader from '../siteHeader';
import SiteFooter from '../siteFooter';
import './layout.scss';
import appleTouchIcon from './apple-touch-icon.png';
import favicon16 from './favicon-16x16.png';
import favicon32 from './favicon-32x32.png';

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
    }

    render={data => (
        <div className="Layout">
          <Helmet>
            <meta charSet="utf-8" />
            <title>{data.site.siteMetadata.title}</title>
            <meta name="description" content={data.site.siteMetadata.description} />
            <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
            <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
            <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
          </Helmet>
          <SiteHeader 
            header="njosefbeck"
            byline="JavaScript Engineer based in St. Louis, Missouri"
          />
            {children}
          <SiteFooter />
        </div>
      )
    }
  />
);