import React from 'react';
import Link from 'gatsby-link';

import '../static/font-awesome/css/font-awesome.css';

const IndexPage = ({ data }) => {
  const edges = data.allContentfulProject.edges;
  const projects = edges.map(edge => {
    const project = edge.node;
    return (
      <li key={project.id}>
        <i className="fa fa-heart-o" aria-hidden="true">
          <Link to={`/${project.slug}`}>
            {project.title}
          </Link>
        </i>
      </li>
    );
  });

  return (
    <div className="app-container">
      <p className="about-me">Front-end web developer located in St. Louis, Missouri. JavaScript makes me weak in the knees. As does high-quality code, collaboration, and learning new things. Please reach out if you have a project idea!</p>

      <ul className="inline-links">
        <li><a href="mailto:njosefbeck@gmail.com" title="Email"><i className="fa fa-envelope" aria-hidden="true"></i></a></li>
        <li><a href="https://twitter.com/njosefbeck" target="_blank" title="Twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
        <li><a href="https://github.com/njosefbeck" target="_blank" title="Github"><i className="fa fa-github" aria-hidden="true"></i></a></li>
        <li><a href="https://instagram.com/njosefbeck/" target="_blank" title="Instagram"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
        <li><a href="http://linkedin.com/in/njosefbeck" target="_blank" title="LinkedIn"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
      </ul>

      <h3>Projects</h3>
      <ul className="project-list">
        {projects}
      </ul>
    </div>
  );
}

export const query = graphql`
  query IndexQuery {
    allContentfulProject {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`;

export default IndexPage
