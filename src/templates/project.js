import React from "react";
import { graphql } from 'gatsby';
import { Helmet } from "react-helmet";
import Img from "gatsby-image";
import Layout from "../components/layout";

export default ({ data }) => {
  const project = data.markdownRemark;
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{project.frontmatter.title} | Project by njosefbeck</title>
        <meta name="description" content={project.frontmatter.description} />
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