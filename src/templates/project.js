import React from "react";
import { graphql } from 'gatsby';
import { Helmet } from "react-helmet";
import Img from "gatsby-image";
import Layout from "../components/layout";

export default ({ data }) => {
  const project = data.markdownRemark;
  const url = `${data.site.siteMetadata.siteUrl}${project.frontmatter.slug}`;
  return (
    <Layout>
      <Helmet>
        <title>{project.frontmatter.title} | Project by njosefbeck</title>
        <meta name="description" content={project.frontmatter.description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={project.frontmatter.title} />
        <meta property="og:description" content={project.frontmatter.description} />
        <meta property="og:site_name" content="njosefbeck" />
        <meta property="twitter:site" content="@njosefbeck" />
      </Helmet>
      <main>
        <h1>{project.frontmatter.title}</h1>
        <Img fluid={project.frontmatter.image.childImageSharp.fluid} />
        <div className="content" dangerouslySetInnerHTML={{ __html: project.html }} />
      </main>
    </Layout>
  )
};

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        slug
        description
        image {
          publicURL
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;