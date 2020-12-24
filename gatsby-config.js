module.exports = {
  siteMetadata: {
    title: `Matt Hoffman\nPhoto`,
    description: `Beautiful, professional photographs for marketing real estate. Serving Prescott Valley, Prescott, and surrounding area.`,
    // this doesn't work: keywords: `professional, photography, real estate, marketing, prescott, prescott valley, arizona, az`,
    author: "Matt Hoffman",
    image: "https://www.matthoffmanphoto.com/static/de9cd208614cdc2803b70c0cee91982f/e7136/LorraineCt_2491.webp",
    name: `Matt Hoffman Photography`,
    tagline: `Beautiful Images for Real Estate`,
    menuLinks: [
      {
        name: "Gallery",
        url: `/`,
        type: "internal"
      },
      {
        name: "Pricing",
        url: "/prices/",
        type: "internal" // internal or anchor
      },
      {
        name: "Home Prep",
        url: "/home-prep/",
        type: "internal"
      },
      {
        name: "About",
        url: "/about",
        type: "internal"
      },
      {
        name: "Contact",
        url: "/contact-me/",
        type: "internal"
      },
    ],
    social: [
      {
        name: `Facebook`,
        url: `https://facebook.com`,
      },
      {
        name: `Twitter`,
        url: `https://twitter.com`,
      },
      {
        name: `Instagram`,
        url: `https://instagram.com`,
      },
    ],
  },
  plugins: [
    //{resolve: `gatsby-plugin-react-helmet`},
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Serena`,
        short_name: `Serena`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        icon: `content/assets/icon.png`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-theme-serena`,
      options: {
        disableContact: true,
        margin: `3`,
        },
    },
    
  ],
  //pathPrefix: "/mhphoto-themed",
}
