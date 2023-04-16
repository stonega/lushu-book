// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const timestampPlugin = require("./plugins/timestamp");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "The Lushu Book",
  tagline: "这是一个实验性项目，使用 OpenAI 的 API 将路书播客的音频节目转为可搜索的文字，在未来会支持更多 AI 功能...",
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
    defaultLocale: "en",
    locales: ["en"],
  }, 
  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        language: "zh",
      },
    ]],
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
            href: "https://github.com/stonega/lushu-book",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        copyright: `Made with ❤️ by Stone. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
