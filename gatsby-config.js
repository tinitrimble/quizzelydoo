module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `eavpqld4hbk6`,
        accessToken: `8b78b5dd14efd20d42179aa6214bf88f7191db16b1de1e39f61e916b6b2f410c`,
      },
    }
  ],
}
