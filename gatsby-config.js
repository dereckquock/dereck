const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'dereck quock',
    description:
      'I do full stack development and I love building things that help people.',
    author: '@dereckquock',
    siteUrl: 'https://dereckquock.com',
  },
  plugins: [
    `gatsby-plugin-pnpm`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: path.resolve('./src/components/layout.js'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
              withWebp: true,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              maintainCase: true,
              icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              offsetY: `100`,
              className: `header-hash-link`,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 800,
        linkImagesToOriginal: false,
        withWebp: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'dereck quock',
        short_name: 'dereck quock',
        start_url: '/',
        background_color: '#746136',
        theme_color: '#746136',
        display: 'standalone',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
        shortcuts: [
          {
            name: 'About Me',
            short_name: 'About',
            url: '/about',
            icons: [
              {
                src: 'src/images/icon.png',
                sizes: '192x192',
                type: 'image/png',
              },
            ],
          },
          {
            name: 'My Projects',
            short_name: 'Projects',
            url: '/projects',
            icons: [
              {
                src: 'src/images/icon.png',
                sizes: '192x192',
                type: 'image/png',
              },
            ],
          },
        ],
      },
    },
    `gatsby-plugin-emotion`,
  ],
};
