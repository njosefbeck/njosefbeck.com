import React from "react";
import { Link, graphql } from "gatsby";
import Layout from '../components/layout';
import './index.scss';

export default ({ data }) => {
  const projects = data.allMarkdownRemark.edges
    .filter(({ node }) => node.frontmatter.template === 'project')
    .map(({ node }) => {
      return (
        <li key={node.id}>
          <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
        </li>
      );
    });

  const posts = data.allMarkdownRemark.edges
    .filter(({ node }) => node.frontmatter.template === 'post')
    .map(({ node }) => {
      return (
        <li key={node.id}>
          <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
        </li>
      );
    });

  return (
    <Layout>
      <main className="Home">
        <p className="lead">Uh oh, it looks like this page doesn't exist.</p>

        <p>Feel free to check out some projects I'm proud of:</p>

        <ul>
          {projects}
        </ul>

        <p>Or read some posts I've written:</p>

        <ul>
          {posts}
        </ul>

      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            template
          }
        }
      }
    }
  }
`