require('dotenv').config()

module.exports = {
  plugins: [
  {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
  },
  // {
  //   resolve: 'gatsby-plugin-manifest',
  //     options: {
  //       name: 'the BA lab',
  //       short_name: 'the BA lab',
  //       start_url: '/',
  //       background_color: '#ffffff',
  //       theme_color: '#5a67d8',
  //       display: 'minimal-ui',
  //       icon: 'content/assets/favicon.png'
  //     }
  //   },
  //   {
  //     resolve: 'gatsby-plugin-sitemap',
  //     options: {}
  //   },
  //   {
  //     resolve: 'gatsby-plugin-google-gtag',
  //     options: {
  //       // The property ID; the tracking code won't be generated without it
  //       trackingIds: [
  //         'G-RFE1EBCJ12'
  //       ]
  //     }
  //   },
  //   {
  //     resolve: 'gatsby-plugin-algolia',
  //     options: {
  //       appId: process.env.GATSBY_ALGOLIA_APP_ID,
  //       apiKey: process.env.ALGOLIA_ADMIN_KEY,
  //       chunkSize: 10000,
  //       queries: require('@elegantstack/gatsby-blog-algolia/src/queries')
  //     }
  //   },
    {
      resolve: '@elegantstack/gatsby-theme-flexiblog-agency',
      options: {
        // Add theme options here. Check documentation for available options.
        siteUrl: process.env.URL || process.env.VERCEL_URL,
        sources: {
          contentful: true,
          local: false
        }
        //,
        // services: {
        //   graphComment: true,
        //   algolia: true
        // }
      }
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    //General Site Metadata
    title: 'Pyrodatic Blog',
    name: 'Pyrodatica',
    description: 'Welcom Pyrodatica',
    address: 'South Africa',
    email: 'emile@pyrodatica.com',
    phone: '+27 (81) 000-0000',
    siteUrl: "https://pyrodatica.com",

    //Site Social Media Links
    social: [
      {
        name: 'Github',
        url: 'https://github.com/emilefraser/thebalab_website'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/'
      },
      {
        name: 'Instagram',
        url: 'https://instagram.com/'
      },
      {
        name: 'Pinterest',
        url: 'https://pinterest.com/'
      },
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com/company/'
      }
    ],

    //Header Menu Items
    headerMenu: [
      // {
      //   name: 'Home',
      //   slug: '/'
      // },
      {
        name: 'Authors',
        slug: '/authors'
      },
      {
        name: 'Contact us',
        slug: '/contact'
      }
    ],

    //Footer Menu Items (2 Sets)
    footerMenu: [
      {
        title: 'Quick Links',
        items: [
          {
            name: 'Contact us',
            slug: '/contact'
          },
          {
            name: 'About Us',
            slug: '/about_us'
          }
        ]
      },
      {
        title: 'Legal Stuff',
        items: [
          {
            name: 'Privacy Notice',
            slug: '/privacy_notice'
          },
          {
            name: 'Cookie Policy',
            slug: '/cookie_policy'
          },
          {
            name: 'Terms Of Use',
            slug: '/terms_of_use'
          }
        ]
      }
    ]
  }
}
