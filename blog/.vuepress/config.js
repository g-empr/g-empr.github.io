module.exports = {
  title: 'ほげほげ',
  description: 'なんたらかんたら',
  base: '',
  dest: 'dist/',
  theme: 'ououe',
  themeConfig: {
    defaultTheme: { dark: [10, 12] },
    showThemeButton: false,
    cover: '/cover.jpg',
    //logo: '/logo.png',
    search: false,
    backgroundImage: false,
    pageGroup: 12,
    // postTime: {
    //   createTime: 'Create Time',
    //   lastUpdated: 'Last Updated',
    //   options: {
    //     dateStyle: 'full',
    //     timeStyle: 'short',
    //     hour12: false,
    //     weekday: 'long'
    //   }
    // },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Posts', link: '/posts/' },
      { text: 'Tags', link: '/tag/' },
      { text: 'About', link: '/about/' }
    ],
    footer: [
      { text: 'Github', link: 'https://github.com/g-empr' }
    ]
  }
}