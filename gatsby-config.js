const fsDataSources = ['HomePage', 'ImprintPage', 'PrivacyPage'];

module.exports = {
  siteMetadata: {
    description:
      'Die Plattform, um Antirassismus-Trainings in deiner Nähe zu finden. Antirassismus-Trainings helfen dabei, rassistische Strukturen zu erkennen und abzubauen.',

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

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Antirassismus-Training.jetzt`,
        short_name: `Antirassismus-Training`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#5759fb`,
        display: `standalone`,
        icon: `static/favicons/favicon-512-512.png`,
        icons: [
          {
            src: `static/favicons/favicon.svg`,
            sizes: `192x192`,
            type: `image/svg+xml`,
          },
        ],
      },
    },

    'gatsby-plugin-preact',
    'gatsby-plugin-linaria',
    'gatsby-plugin-netlify',
    'gatsby-plugin-hooked-head',
  ],
};
