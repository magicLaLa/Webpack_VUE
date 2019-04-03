const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [
    'vue/dist/vue.esm.js'
  ],
  output: {
    filename: 'vender.dll.js',
    path: path.resolve(__dirname, '../static'),
    libraryTarget: 'var', // 链接库的输出方式，默认为 var 形式
    library: '_dll_[name]_[hash]' // 全局变量名称
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '../vender.manifest.json'),
      name: '_dll_[name]_[hash]' // 和library 一致，输出的manifest.json中的name值
    })
  ]
}