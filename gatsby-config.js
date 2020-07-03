const fsDataSources = ['HomePage', 'ImprintPage', 'PrivacyPage'];

module.exports = {
  plugins: [
    'gatsby-transformer-yaml',
    'gatsby-transformer-remark',

    ...fsDataSources.map((name) => ({
      resolve: `gatsby-source-filesystem`,
      options: {
        name,
        path: `${__dirname}/src/data/${name}`,
      },
    })),

    'gatsby-plugin-preact',
    'gatsby-plugin-linaria',
    'gatsby-plugin-netlify',
    'gatsby-plugin-hooked-head',
  ],
};
