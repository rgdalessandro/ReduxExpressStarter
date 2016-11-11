'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    './client/index.js'
  ],
  output: {
    path: './public',
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({ // Give access to the NODE_ENV in the bundled code
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    fallback: path.join(__dirname, "node_modules")
  },
  resolveLoader: { fallback: path.join(__dirname, "node_modules") },
  devServer: {
    historyApiFallback: true,
    contentBase: './public',
    inline: true
  }
};