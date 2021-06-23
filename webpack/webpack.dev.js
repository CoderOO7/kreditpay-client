const { merge } = require('webpack-merge');

const paths = require('./paths');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'js/[name].js',
    path: paths.build,
    pathinfo: true,
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: paths.build,
    host: '0.0.0.0',
    port: 8080,
    historyApiFallback: true
    /* proxy: {
      '/v1': {
        target: 'http://localhost:3000',
        secure: false
      }
    } */
    // writeToDisk: true,
  },
  // improve runtime build performance
  optimization: {
    runtimeChunk: true
  }
});
