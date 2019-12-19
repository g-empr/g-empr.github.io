module.exports = {
  title: "ほげほげ",
  description: "なんたらかんたら",
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
    //logo: '/logo.png',
    search: false,
    backgroundImage: false,
    pageGroup: 12,
    postTime: {
      createTime: '記事更新',
      lastUpdated: false,
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
        text: "Github",
        link: "https://github.com/g-empr"
      }
    ]
  }
};
