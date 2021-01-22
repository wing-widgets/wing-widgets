const { merge } = require('webpack-merge');
const parts = require('../webpack.parts.js');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = merge(
  {
    mode: 'production',
    output: {
      filename: 'js/[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist')
    },
    plugins: [
      new CleanWebpackPlugin()
    ]
  },
  common,
  parts.createCSSFiles(),
  parts.loadBabel()
);