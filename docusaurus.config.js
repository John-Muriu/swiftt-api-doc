// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  "title": "Swifttdial Systems Limited",
  tagline: 'API Documentations',
  "url": "https://api.swifftdial.com",
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/img/SWIFFTDIAL-1.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  "organizationName": "Swifttdial systems limited", //Usually your GitHub org/user name.
  "projectName": "Swifttdial systems limited",
  // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/',
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
        title: ' ',
        logo: {
          alt: 'my',
          src: 'img/SWIFFTDIAL.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Get Started',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://app.swifttdial.com/',
            label: 'sign in',
            position: 'right',
          },
        ],
      },

      // algolia: {
      //   appId: 'KH36LP2UU2',
      //   apiKey: '0e494b68f7d1256e76b193c0070f63ad',
      // },
       
        footer: {
        style: 'dark',
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
              {
                label: 'Status Page',
                href: 'https://swifttdial.instatus.com/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: 'https://app.slack.com/',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/swifttdial',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} swifttdial Systems Limited.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
