import React from "react";
import { Link, graphql } from "gatsby";
import Layout from '../components/layout';
import './index.scss';

export default ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(({ node }) => {
    return (
      <li key={node.id}>
        <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
      </li>
    );
  });

  return (
    <Layout>
      <main className="Home">
        <p>Sometimes I like to share my thoughts.</p>
        <ul>
          {posts}
        </ul>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { 
        frontmatter: {
          template: { eq: "post" } 
        }
      }
    ) {
      edges {
        node {
          id
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
    }
  }
`;
