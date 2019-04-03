const webpack = require('webpack')
const merge = require("webpack-merge")
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
// const path = require("path")
const baseConfig = require('./webpack.base.conf')
const config = require('../config')
const myLocalIp = require('my-local-ip')()

let {
  port,
  errorOverlay,
  assetsPublicPath,
  poll,
  devtool
} = config.dev

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool,
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
          messages: [`Your application is running here: ${config.dev.https ? 'https' : 'http'}://${myLocalIp}:${config.dev.port}`],
      },
      onErrors (severity, errors) {
        console.log('FriendlyErrorsWebpackPluginErr', severity, errors)
      },
      clearConsole: true
    })
  ],
  devServer: {
    hot: true,
    open: true,
    port,
    host: myLocalIp,
    quiet: true, // FriendlyErrorsWebpackPlugin 需要开启 禁止显示 devServer 的console信息
    overlay: true, // 编译出现错误时，将错误直接显示在页面上
    compress: true, // 一切服务都启用 gzip 压缩
    overlay: errorOverlay ? {
      warnings: false,
      errors: true
    } : false,
    publicPath: assetsPublicPath,
    watchOptions: {
      poll
    }
  }
})