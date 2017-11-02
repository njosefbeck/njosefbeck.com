const path = require('path');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulProject {
          edges {
            node {
              slug
            }
          }
        }
      }
    `)
    .then(result => {
      const edges = result.data.allContentfulProject.edges;
      edges.map(edge => {
        const project = edge.node;
        createPage({
          path: `${project.slug}`,
          component: path.resolve('./src/templates/project.js'),
          context: {
            slug: project.slug
          },
        });
      });
      resolve();
    });
  });
}