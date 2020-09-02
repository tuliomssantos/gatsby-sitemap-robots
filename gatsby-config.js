/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Gatsby Site With Sitemap And Robots Configured`,
    lang: `pt-br`,
    description: `Gatsby Site With Sitemap And Robots Configured`,
    author: `tuliomssantos@gmail.com`,
    siteUrl: `https://www.example.com`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt'
  ],
}
