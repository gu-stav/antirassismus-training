const fsDataSources = ['HomePage', 'ImprintPage', 'PrivacyPage'];

module.exports = {
  siteMetadata: {
    socialMedia: [
      ['twitter', 'https://twitter.com/zsmmnlbnwllkmmn'],
      ['facebook', 'https://www.facebook.com/zusammenlebenwillkommen/'],
      ['instagram', 'https://www.instagram.com/zusammenlebenwillkommen/'],
      ['telegram', 'https://t.me/antira_training'],
    ],
  },

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

    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /static\/icons/,
        },
      },
    },

    'gatsby-plugin-preact',
    'gatsby-plugin-linaria',
    'gatsby-plugin-netlify',
    'gatsby-plugin-hooked-head',
  ],
};
