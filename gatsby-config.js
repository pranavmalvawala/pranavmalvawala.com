const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: `Pranav Malvawala`,
    description: `Personal Blog`,
    author: `@pranavmalvawala`,
    siteUrl: `https://pranavmalvawala2.netlify.app/`,
    social: {
      twitter: `@pranavmalvawala`,
    },
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.white,
        theme_color: fullConfig.theme.colors.teal["400"],
        display: `minimal-ui`,
        icon: `src/images/tailwind-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
        ],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-174974242-1`,
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Red Hat Display`,
            subsets: [`latin`],
          },
          {
            family: `Red Hat Text`,
            subsets: [`latin`],
            variants: [`400`, `400i`, `700`, `900`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        whitelist: [`mode-dark`, `ol`, `ul`, `blockquote`],
        purgeOnly: [`src/css/style.css`],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: `static`,
            },
          },
          `gatsby-remark-external-links`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
              quality: 80,
            },
          },
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: `assets`,
            },
          },
          `gatsby-plugin-my-social-cards`,
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
  ],
};
