import React from "react";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import './layout.scss';

import SiteHeader from '../siteHeader';
import SiteFooter from '../siteFooter';

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