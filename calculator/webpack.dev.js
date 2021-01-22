const { merge } = require('webpack-merge');
const parts = require('../webpack.parts.js');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(
  {
    mode: 'development',
    output {
      filename: 'js/[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  },
  common,
  parts.loadSCSS(),
  parts.devServer({ port: 8080, pathDev: './dist' })
);