const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

const baseConfig = require('./webpack.config.base');
const { PATH, FILE_NAMES } = require('./constants/paths');

module.exports = merge(baseConfig, {
    mode: 'production',
    entry: PATH.ENTRY_CLIENT,
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
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new CompressionPlugin(),
        new HtmlWebpackPlugin({
            template: FILE_NAMES.HWP_TEMPLATE,
        }),
        new WorkboxPlugin.InjectManifest({
            swSrc: './src/service-worker.js',
            swDest: 'service-worker.js',
            runtimeCaching: [{
                urlPattern: 'https://jsonplaceholder.typicode.com/todos',
                handler: 'NetworkFirst',
            }],
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
