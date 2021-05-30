/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Fabiana Fonseca',
  tagline: 'Personal blog',
  url: 'https://fabianaferreira.github.io',
  baseUrl: '/fabianafonseca',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'FabianaFerreira', // Usually your GitHub org/user name.
  projectName: 'fabianafonseca', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Fabiana Fonseca',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Studies',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/FabianaFerreira/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Fabiana Fonseca, Inc. Built with Docusaurus.`,
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    require.resolve('@cmfcmf/docusaurus-search-local')
  ],
};
