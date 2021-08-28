const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // extract css to files

const paths = require('./paths');

module.exports = {
  entry: {
    main: `${paths.src}/index.jsx`
  },
  resolve: {
    alias: {
      '@kreditpay': paths.src
    }
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader', // postcss loader needed for tailwindcss
            options: {
              postcssOptions: {
                ident: 'postcss',
                config: paths.postcss
              }
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: {
          // file types you are using in your application
          extensions: ['.js', '.jsx']
        },
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            cacheCompression: false
          }
        }
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      },
      // Images: Copy image files to build folder
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' }
    ]
  },
  plugins: [
    new Dotenv({ systemvars: true, path: paths.env }),

    new MiniCssExtractPlugin({
      filename: 'styles/[name].[chunkhash].css',
      chunkFilename: '[id].[chunkhash].css'
    }),
    // prevent deletion of assets define in CopyWebpackPlugin
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${paths.src}/assets`,
          to: 'assets',
          noErrorOnMissing: true
        }
      ]
    }),

    new HtmlWebpackPlugin({
      template: `${paths.src}/index.html`
    }),

    new webpack.ProvidePlugin({
      process: 'process/browser'
    })
  ],

  cache: {
    type: 'filesystem'
  }
};
