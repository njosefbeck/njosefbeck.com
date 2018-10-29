module.exports = {
  siteMetadata: {
    title: `njosefbeck.com | St.Louis-based JavaScript engineer`,
    description: `Portfolio website and blog for JavaScript engineer Nathan Beck`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-44175001-3',
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
}