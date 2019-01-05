const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = require('./webpack.base.config')({
  devtool: 'eval-source-map',
  mode: 'development',
  entry: [
    'eventsource-polyfill',
    'webpack-hot-middleware/client?reload=true',
    path.join(process.cwd(), 'app/index.tsx')
  ],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  optimization: {
    splitChunks: {
      'chunks': 'all'
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'public/index.html'
    }),
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/,
      failOnError: false
    })
  ],
  devserver: {
    hot: true,
    inline: true,
    overlay: true,
    quiet: false,
    stats: 'errors-only',
    historyApiFallback: true,
    contentBase: path.resolve(process.cwd() + '/public'),
    watchContentBase: true
  },
  performance: {
    hints: false
  }
});
