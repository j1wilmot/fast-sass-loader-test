const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './entry.js',
  context: path.join(__dirname),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: ExtractTextPlugin.extract({
          use: [
          'css-loader',
          'fast-sass-loader',
          ]
        })
      },
    ]
  },
  resolve: {
    modules: ['node_modules']
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
}
