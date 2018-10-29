import React from "react";
import { Link, graphql } from "gatsby";
import Layout from '../components/layout';
import './index.scss';

export default ({ data }) => {
  const projects = data.allMarkdownRemark.edges.map(({ node }) => {
    return (
      <li key={node.id}>
        <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
      </li>
    );
  });

  return (
    <Layout>
      <main className="Home">
        <p className="lead">Former high school Spanish teacher, turned fullstack JavaScript engineer. Won't stop learning. Can't stop connecting. I don't know what else to write here. This is filler copy until I can come up with something a bit more witty.</p>

        <p>As of Oct. 29, 2018, learning about MongoDB & Mongoose, password security best practices, and ES6 class syntax. Wanna learn together? Get in touch!</p>

        <p>Here are some projects I'm proud of:</p>

        <ul>
          {projects}
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
          }
        }
      }
    }
  }
`
