module.exports = {
  plugins: [
    'gatsby-transformer-yaml',

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `HomePage`,
        path: `${__dirname}/src/data/HomePage`,
      },
    },

    'gatsby-plugin-preact',
    'gatsby-plugin-linaria',
    'gatsby-plugin-netlify',
    'gatsby-plugin-hooked-head',
  ],
};
