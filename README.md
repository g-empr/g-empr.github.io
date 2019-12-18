# ブログ管理用ブランチ

## 前提

グローバルに以下のプラグインをインストールしておく。

```bash
$ npm i -g gh-pages
$ npm i -g vuepress

# なければ
$ brew install yarn
# nodeのVCSからnpmまで入れておく
$ brew install nodebrew
```

## 手順

```bash
# パッケージインストール
$ yarn install
# or
$ npm install

# テスト用のdev立ち上げ: localhost:8080
$ yarn dev
# or
$ npm run dev

# 公開用ファイルのビルド
$ yarn build
# or
$ npm run build

# gh-pagesを使ってdevブランチから直接masterに公開用ファイルだけpush
$ yarn deploy
# or (用設定)
$ npm run ndeploy

```

Theme by [vuepress-theme-ououe](https://github.com/tolking/vuepress-theme-ououe)  
Power by [vuepress](https://github.com/vuejs/vuepress), [Documentation](https://tolking.github.io/vuepress-theme-ououe)
