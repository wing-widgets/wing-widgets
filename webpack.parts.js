const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

exports.loadSCSS = () => ({
  module: {
    rules: [
      {
        test: /\.scss/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
});

exports.loadBabel = () => ({
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      }
    ]
  }
});

exports.createCSSFiles = () => ({
  module: {
    rules: [
      {
        test: /\.scss/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]
})

exports.devServer = ({ port, pathDev }) => ({
  devServer: {
    contentBase: path.join(__dirname, pathDev),
    port,
    open: true
  }
});

exports.createNewHtml = ({ template, name }) => ({
  plugins: [
    new HtmlWebpackPlugin({
      template,
      filename: name ? `html/${name}.html` : 'html/index.html'
    })
  ]
});
