require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
      },
    },
  ],
  siteMetadata: {
    title: 'Capifrance',
    description: 'Capifrance annonce immobilière',
    copyright: 'This website is copyright 2021 DigitRe Group',
    contact: 'support@digitregroup.com',
  },
};
