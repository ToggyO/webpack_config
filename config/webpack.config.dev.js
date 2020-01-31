const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const WorkboxPlugin = require('workbox-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const baseConfig = require('./webpack.config.base');
const paths = require('./constants/paths');


module.exports = merge(baseConfig, {
    mode: 'development',
    entry: paths.appIndexTsx,
    output: {
        filename: 'bundle.js',
        path: paths.appBuild,
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.module\.s(a|c)ss$/,
                use: ['style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: './config/',
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /\.module.(s(a|c)ss)$/,
                use: ['style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: './config/',
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: paths.appHtml,
        }),
        new ForkTsCheckerWebpackPlugin(),
        new WorkboxPlugin.InjectManifest({
            swSrc: './src/service-worker.ts',
            swDest: 'service-worker.js',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3010,
        hot: true,
        compress: true,
        // open: true,
        historyApiFallback: true,
        clientLogLevel: 'info',
        watchContentBase: true,
        overlay: false,
    },
    devtool: 'inline-source-map',
});
