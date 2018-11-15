const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                slug
                title
                description
                template
              }
            }
          }
        }
      }
    `
    )
    .then(result => {
      result.data.allMarkdownRemark.edges.forEach(edge => {
        createPage({
          path: edge.node.frontmatter.slug,
          component: path.resolve(`./src/templates/${edge.node.frontmatter.template}.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: edge.node.frontmatter.slug
          },
        })
      });
      resolve();
    })
  })
};