# Webpack4搭建项目环境

## 初始化项目

```bash
npm init -y
```

## 安装 Webpack4 及 相关插件

```bash
npm i webpack webpack-cli -D
npm install webpack-merge --save-dev
npm install webpack-dev-server --save-dev
npm install --save-dev clean-webpack-plugin
```

## 安装 bebel

```bash
npm install --save-dev babel-loader @babel/core
npm install @babel/preset-env --save-dev
```

## 本地IP

```bash
npm install my-local-ip --save-dev
```

## vue 相关

```bash
npm install --save vue
npm install --save-dev vue-loader vue-template-compiler
```

## 样式相关

```bash
npm install --save-dev css-loader vue-style-loader
npm i postcss-loader autoprefixer -D
npm install --save-dev sass-loader node-sass
```

## 文件相关

```
npm install --save-dev file-loader url-loader
npm install --save-dev svg-sprite-loader
```

## css 提取

```sh
npm install -D mini-css-extract-plugin
```

## env 解决跨平台问题

```sh
npm install cross-env --save-dev
```

## 增加复制文件插件

```sh
npm i copy-webpack-plugin -D
```

## 引用外部资源(外部扩展 externals)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>vue demo</title>
</head>
<body>
    <div id="app"></div>
    <script src="http://apps.bdimg.com/libs/jquery/2.1.4/jquery.js"></script>
</body>
</html>
```

```js
// webpack.base.conf.js
module.exports = {
  externals: {
    'jquery': 'window.Jquery'
  }
}
// App.vue
import $ from 'jquery'
```

## dll动态链接库加载到页面中

```sh
npm i html-webpack-include-assets-plugin -D
```

## Webpack Dashboard 提供了比控制台输出更好的用户体验

```sh
npm install webpack-dashboard --save-dev (暂定)
```

## 清理 webpack 编译时输出无用的信息

```sh
npm install friendly-errors-webpack-plugin --save-dev
```