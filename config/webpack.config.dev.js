const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.config.base');
const { PATH, FILE_NAMES } = require('./constants/paths');

module.exports = merge(baseConfig, {
    mode: 'development',
    entry: PATH.ENTRY_POINT,
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: FILE_NAMES.HWP_TEMPLATE,
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
