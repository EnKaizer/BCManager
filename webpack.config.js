const env = process.env.NODE_ENV

const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: env === 'production'
          ? ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [ 'css-loader' ]
          })
          : [ 'style-loader', 'css-loader' ]
      },
    ]
  },
  plugins: env === 'production'
    ? [
        new ExtractTextPlugin({
          filename: '[name].css'
        })
      ]
    : []
}