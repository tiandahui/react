const {
  merge
} = require('webpack-merge')
const baseConfig = require('./base.config')

// 引入抽离css插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = merge(baseConfig, {
  mode: 'production',
  module: {
    rules: [{
      test: /\.(css|scss)$/,
      // use: ExtractTextPlugin.extract({
      //   use: [{
      //       loader: 'css-loader'
      //     },
      //     {
      //       loader: 'postcss-loader'
      //     },
      //     {
      //       loader: 'sass-loader'
      //     }
      //   ],
      //   fallback: 'style-loader'
      // })
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    })
  ]
})

module.exports = config