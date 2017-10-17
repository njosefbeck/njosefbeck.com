module.exports = {
  siteMetadata: {
    title: `njosefbeck.com | St.Louis-based web and iOS developer`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `7akcz0wffnyf`,
        accessToken: `a548392c4dc2ab5e87e3f5781b7ec9470fc24b344639aed7a6d21778e8d41843`,
        host: `preview.contentful.com`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: []
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-44175001-3',
        // Setting this parameter is optional
        anonymize: true
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `bitter\:400,700`,
          `open sans\:400,600,700` // you can also specify font weights and styles
        ]
      }
    },
  ],
}
