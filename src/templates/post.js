import React from "react";
import { graphql } from 'gatsby';
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import './post.scss';

export default ({ data }) => {
  const post = data.markdownRemark;
  const url = `${data.site.siteMetadata.siteUrl}${post.frontmatter.slug}`;
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{post.frontmatter.title} | njosefbeck</title>
        <meta name="description" content={post.frontmatter.description} />
      </Helmet>
      <main className="post">
        <h1>{post.frontmatter.title}</h1>
        <span className="date">{post.frontmatter.date}</span>
        <div className="content" dangerouslySetInnerHTML={{ __html: post.html }} />
        <p className="share">Share this post on 
        <a href={`https://www.facebook.com/sharer.php?u=${url}`} target="_blank" rel="noopener noreferrer"> Facebook</a>, 
          <a href={`https://twitter.com/intent/tweet?url=${url}&text=${post.frontmatter.title}&via=njosefbeck`} target="_blank" rel="noopener noreferrer"> Twitter</a>, or 
          <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${post.frontmatter.title}&summary=${post.frontmatter.description}&source=https://njosefbeck.com`} target="_blank" rel="noopener noreferrer"> LinkedIn</a></p>
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