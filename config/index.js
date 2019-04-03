'use strict';

const path = require('path')

module.exports = {
  public: {
    assetsRoot: path.resolve(__dirname, '../dist')
  },
  dev: {
    port: 8899,
    errorOverlay: true,
    assetsPublicPath: '/',
    https: false,
    poll: false,
    devtool: 'source-map',
    assetsRoot: path.resolve(__dirname, '../dist')
  },
  build: {
    assetsRoot: path.resolve(__dirname, '../dist'),
    devtool: false
  }
}