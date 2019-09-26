const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const WorkboxPlugin = require('workbox-webpack-plugin');

const baseConfig = require('./webpack.config.base');
const { PATH, FILE_NAMES } = require('./constants/paths');

module.exports = merge(baseConfig, {
    mode: 'development',
    entry: PATH.ENTRY_CLIENT,
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/',
    },
    module: {
      rules: [
          {
              test: /\.s[ac]ss$/i,
              use: ['style-loader', 'css-loader', 'sass-loader'],
          },
      ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: FILE_NAMES.HWP_TEMPLATE,
        }),
        new WorkboxPlugin.InjectManifest({
            swSrc: './src/service-worker.js',
            swDest: 'service-worker.js',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 3001,
        hot: true,
        compress: true,
        open: true,
        historyApiFallback: true,
        clientLogLevel: 'info',
        watchContentBase: true,
        overlay: false,
    },
    devtool: 'inline-source-map',
});
