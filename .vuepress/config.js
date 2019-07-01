module.exports = {
  title: "CourtIQ Explainer",
  description: "Just playing around",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/icons/favicon-32x32.png`,
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: `/icons/android-icon-192x192.png`,
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: `/icons/favicon-96x96.png`,
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `/icons/favicon-16x16.png`,
      },
    ],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#000000" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/icons/apple-touch-icon-152x152.png` },
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: "#3eaf7c",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/icons/ms-icon-144x144.png",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
  ],
  serviceWorker: true,
  ga: "UA-130757514-1",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Analytics", link: "/analytics/" },
      { text: "CBA", link: "/cba/intro/" },
      { text: "Feedback", link: "/feedback/" },
    ],
    sidebar: "auto",
    themeConfig: {
      lastUpdated: "Last Updated", // string | boolean
      serviceWorker: {
        updatePopup: true, // Boolean | Object, default to undefined.
        // If set to true, the default text config will be:
        // updatePopup: {
        //    message: "New content is available.",
        //    buttonText: "Refresh"
        // }
      },
    },
  },
  plugins: [
    "@vuepress/back-to-top",
    "@vuepress/google-analytics",
    {
      ga: "UA-130757514-1", // UA-00000000-0
    },
  ],
};
