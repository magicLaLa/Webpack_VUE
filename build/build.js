const webpack = require("webpack")
const prodConfig = require("./webpack.prod.conf")

webpack(prodConfig, (err, stats) => {
  if (err || stats.hasErrors()) return new Error(err)

  console.log(stats.toString({
    chunks: false, // 使构建过程静默无输出
    colors: true // 在控制台展示颜色
  }))
})