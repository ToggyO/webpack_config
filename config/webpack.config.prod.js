const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const baseConfig = require('./webpack.config.base');
const { PATH, FILE_NAMES } = require('./constants/paths');

module.exports = merge(baseConfig, {
    mode: 'production',
    entry: PATH.ENTRY_POINT,
    output: {
        filename: 'bundle.[chunkhash].js',
        path: path.resolve(PATH.OUTPUT),
        publicPath: '/',
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: false,
                uglifyOptions: {
                    ecma: 8,
                    compress: false,
                    mangle: true,
                },
            }),
        ],
    },
    plugins: [
        new CompressionPlugin(),
        new HtmlWebpackPlugin({
            template: FILE_NAMES.HWP_TEMPLATE,
        }),
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        }),
    ],
    devtool: 'inline-source-map',
});
