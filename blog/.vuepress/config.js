module.exports = {
  title: 'ほげほげ',
  description: 'なんたらかんたら',
  base: '',
  dest: 'dist/',
  theme: 'ououe',
  themeConfig: {
    defaultTheme: { dark: [10, 12] },
    showThemeButton: false,
    cover: '/images/cover.jpg',
    //logo: '/logo.png',
    search: false,
    backgroundImage: false,
    pageGroup: 12,
    postTime: {
      createTime: false,
      lastUpdated: false,
      options: {
        dateStyle: 'short',
        timeStyle: 'short',
        hour12: false,
        weekday: 'long'
      }
    },
    nav: [
      { text: 'Top', link: '/' },
      { text: 'Posts', link: '/posts/' },
      { text: 'Tags', link: '/tag/' },
      { text: 'About', link: '/about/' }
    ],
    footer: [
      { text: 'Github', link: 'https://github.com/g-empr' }
    ]
  }
}