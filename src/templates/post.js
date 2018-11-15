import React from "react";
import { graphql } from 'gatsby';
import { Helmet } from "react-helmet";
import Img from "gatsby-image";
import Layout from "../components/layout";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{post.frontmatter.title} | njosefbeck</title>
        <meta name="description" content={post.frontmatter.description} />
      </Helmet>
      <main>
        <h1>{post.frontmatter.title}</h1>
        <span>{post.frontmatter.date}</span>
        {/*<Img fluid={project.frontmatter.image.childImageSharp.fluid} />*/}
        <div className="content" dangerouslySetInnerHTML={{ __html: post.html }} />
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
        date
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