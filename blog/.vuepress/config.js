module.exports = {
  title: "じごくへん",
  description: "",
  base: "",
  dest: "dist/",
  theme: "ououe",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=M+PLUS+1p"
      }
    ]
  ],
  themeConfig: {
    defaultTheme: {
      dark: [10, 12]
    },
    showThemeButton: false,
    cover: "/images/cover.jpg",
    logo: '/images/logo.png',
    search: false,
    backgroundImage: false,
    pageGroup: 12,
    postTime: {
      createTime: '記事追加',
      lastUpdated: '最終更新',
      options: {
        dateStyle: "short",
        timeStyle: "short",
        hour12: false,
        timeZone: "Asia/Tokyo"
      }
    },
    nav: [
      {
        text: "トップ",
        link: "/"
      },
      {
        text: "記事一覧",
        link: "/posts/"
      },
      {
        text: "タグ",
        link: "/tag/"
      },
      {
        text: "About",
        link: "/about/"
      }
    ],
    footer: [
      {
        text: "g-empr@Github",
        link: "https://github.com/g-empr"
      }
    ]
  },
  plugins: [
    // you can use this plugin multiple times
    [
      'vuepress-plugin-container',
      {
        type: 'right',
        defaultTitle: '',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'theorem',
        before: info => `<div class="theorem"><p class="title">${info}</p>`,
        after: '</div>',
      },
    ],

    // this is how VuePress Default Theme use this plugin
    [
      'vuepress-plugin-container',
      {
        type: 'tip',
        defaultTitle: {
          '/': 'TIP',
          '/zh/': '提示',
        },
      },
    ],
  ],
};
