import React from "react";
import { Link, graphql } from "gatsby";
import Layout from '../components/layout';
import './blog.scss';

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
      <main className="Blog">
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
      sort: {fields: [frontmatter___num_date], order: DESC}
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            date
            num_date
          }
        }
      }
    }
  }
`;
