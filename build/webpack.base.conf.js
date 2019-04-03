const path = require('path')
const webpack = require('webpack')
const config = require('../config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')


function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

console.log('process.env.NODE_ENV', process.env.NODE_ENV)

const devMode = process.env.NODE_ENV !== 'production'
let isUseLoader = devMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].[hash].bundle.js',
    publicPath: './'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        ),
        loader: 'babel-loader?cacheDirectory' // 缓存loader执行结果
      },
      {
        // 注意 sass-loader 会默认处理不基于缩进的 scss 语法。为了使用基于缩进的 sass 语法，你需要向这个 loader 传递选项：indentedSyntax: true
        // https://vue-loader.vuejs.org/zh/guide/pre-processors.html#sass
        test: /\.(sa|sc|c)ss/,
        use: [
          isUseLoader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: false
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: [resolve('src/icons')],
        options: {
          symbolId: 'icon-[name]'
        }
      },
      {
        test: /\.(png|jpe?j|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        exclude: [resolve('src/icons')],
        options: {
          limit: 10000,
          name: 'img/[name].[ext]?[hash]' // 输出到dist/img目录下，[name]原文件名，[ext]原后缀，[hash]在url上加上一点哈希值避免缓存。
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: 'fonts/[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: 'static'
      }
    ]),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html')
    }),
    new webpack.DllReferencePlugin({
      manifest: require('../vender.manifest.json')
    })
  ]
}