import React from "react";
import Helmet from 'react-helmet';

import '../static/font-awesome/css/font-awesome.css';

class ProjectTemplate extends React.Component {
  render() {
    const project = this.props.data.contentfulProject;
    let tags = '';
    let links = '';

    if (project.tags) {
      tags = project.tags.map(tag => {
        return (
          <li key={tag.id}>{tag.name}</li>
        );
      });
    }

    if (project.links) {
      links = project.links.map(link => {
        return (
          <li key={link.id}>
            <a href={link.url} target="_blank" title={link.title}>
              <i className={`fa ${link.icon}`} aria-hidden="true"></i>
            </a>
          </li>
        );
      });
    }

    return (
      <div className="project">
        <Helmet
          title={`Project: ${project.title} | njosefbeck.com`}
          meta={[
            { name: 'description', content: `${project.description.description.substring(0, 160)}` },
          ]}
        />
        <img className="project-image" src={project.image.file.url} alt={project.image.description} />
        <h2>{project.title}</h2>
        <ul className="inline-links inline-links--highlight">
          {tags}
        </ul>
        <div dangerouslySetInnerHTML={{ __html: project.description.childMarkdownRemark.html }} />
        <ul className="inline-links">
          {links}
        </ul>
      </div>
    );
  }
}

export default ProjectTemplate;

export const query = graphql`
  query ProjectQuery($slug: String!) {
    contentfulProject(slug: { eq: $slug}) {
      title
      description {
        description
        childMarkdownRemark {
          html
        }
      }
      image {
        description
        file {
          url
          fileName
        }
      }
      tags {
        id
        name
      }
      links {
        id
        url
        icon
        title
      }
    }
  }
`;