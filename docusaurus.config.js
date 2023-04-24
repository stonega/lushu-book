// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const timestampPlugin = require("./plugins/timestamp.js");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "The Lushu Book",
  tagline:
    "这是一个实验性项目，探索播客与 AI 结合的可能性...",
  favicon: "img/logo.jpg",

  // Set the production url of your site here
  url: "https://lushu-book.vercel.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "stonega", // Usually your GitHub org/user name.
  projectName: "lushu-book", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh",
    locales: ["zh"],
  },
  // themes: [
  //   [
  //     require.resolve("@easyops-cn/docusaurus-search-local"),
  //     /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
  //     {
  //       hashed: true,
  //       language: ["en", "zh"],
  //       docsRouteBasePath: "/episodes",
  //       docsDir: "episodes",
  //       highlightSearchTermsOnTargetPage: true
  //     },
  //   ],
  // ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "episodes",
          routeBasePath: "episodes",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/stonega/lushu-book",
          remarkPlugins: [timestampPlugin],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  clientModules: [require.resolve('./plugins/player.js')],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "The Lushu Book",
        logo: {
          alt: "The Lushu Book",
          src: "img/logo.jpg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "节目",
          },
          {
            to: "qa",
            sidebarId: "qa",
            position: "left",
            label: "问问题",
          },
          {
            href: "https://github.com/stonega/lushu-book",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        copyright: `Made with ❤️ by Stone<br/>Built with Docusaurus Powered by OpenAI<br/> 声明：节目内容版权归路书所有，本项目与路书官方无关。`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "VG6NUP8QO5",

        // Public API key: it is safe to commit it
        apiKey: "8f8b4e61f694d094615a1fe6725d7c49",

        indexName: "LUSHU",

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: "external\\.com|domain\\.com",

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: "/docs/", // or as RegExp: /\/docs\//
          to: "/",
        },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",
      },
    }),
};

module.exports = config;
