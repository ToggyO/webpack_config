const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.config.base');
const { PATH } = require('./constants/paths');

module.exports = merge(baseConfig, {
  mode: 'production',
  target: 'node',
  entry: PATH.ENTRY_SERVER,
  output: {
    filename: 'server.js',
    path: path.resolve(PATH.OUTPUT),
  },
  externals: [webpackNodeExternals()],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: 'null-loader',
      },
    ],
  },
});
