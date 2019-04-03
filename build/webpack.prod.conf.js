const merge = require("webpack-merge")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const baseConfig = require("./webpack.base.conf")
const config = require('../config')

let {
  devtool
} = config.build

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool,
  plugins: [
    new CleanWebpackPlugin({
      verbose: true
    })
  ]
})