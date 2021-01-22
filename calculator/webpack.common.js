const { merge } = require('webpack-merge');
const parts = require('../webpack.parts.js');

module.exports = merge(
  {
    entry: {
      index: './calculator/src/js/index.js'
    }
  },
  parts.createNewHtml({ template: './calculator/src/html/index.html' })
);