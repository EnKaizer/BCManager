const env = process.env.NODE_ENV;

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use:
          env === 'production'
            ? ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader'],
              })
            : ['style-loader', 'css-loader'],
      },
      {
        test: /\.(ttf|eot|svg|gif)(\?[\s\S]+)?$/,
        loader: 'file',
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
    ],
  },
  plugins:
    env === 'production'
      ? [
          new ExtractTextPlugin({
            filename: '[name].css',
          }),
        ]
      : [],
};
