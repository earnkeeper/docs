// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'EarnKeeper',
  tagline: 'Play To Earn Tools',
  url: 'https://developers.earnkeeper.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'earnkeeper', // Usually your GitHub org/user name.
  projectName: 'earnkeeper', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/earnkeeper/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'EarnKeeper',
        logo: {
          alt: 'EarnKeeper Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'user-guide/welcome',
            position: 'left',
            label: 'User Guide',
          },
          {
            type: 'doc',
            docId: 'developer/welcome',
            position: 'left',
            label: 'Developer',
          },
          {
            href: 'https://github.com/earnkeeper/ekp-sdk',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'User Guide',
                to: '/docs/user-guide/welcome',
              },
              {
                label: 'Developer',
                to: '/docs/developer/welcome',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/92EMAWVrrn',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/earnkeeper',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/earnkeeper',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Earn Keeper. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
