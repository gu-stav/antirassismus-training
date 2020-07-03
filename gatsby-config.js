module.exports = {
  plugins: [
    'gatsby-transformer-yaml',
    'gatsby-transformer-remark',

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `HomePage`,
        path: `${__dirname}/src/data/HomePage`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `ImprintPage`,
        path: `${__dirname}/src/data/ImprintPage`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `PrivacyPage`,
        path: `${__dirname}/src/data/PrivacyPage`,
      },
    },

    'gatsby-plugin-preact',
    'gatsby-plugin-linaria',
    'gatsby-plugin-netlify',
    'gatsby-plugin-hooked-head',
  ],
};
