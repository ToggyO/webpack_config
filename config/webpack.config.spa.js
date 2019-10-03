const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { StatsWriterPlugin } = require('webpack-stats-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');


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
        minimize: true,
        minimizer: [
            new TerserPlugin({
                test: /\.js(\?.*)?$/i,
                parallel: true,
            }),
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
            new OptimizeCSSAssetsPlugin({}),
        ],
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
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
        new CompressionPlugin(),
        new HtmlWebpackPlugin({
            template: FILE_NAMES.HWP_TEMPLATE,
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.[chunkhash].css',
        }),

        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        }),
        new StatsWriterPlugin({
            filename: 'stats.json',
            stats: {
                all: false,
                assets: true,
            },
        }),
        new WorkboxPlugin.InjectManifest({
            swSrc: './src/service-worker.js',
            swDest: 'service-worker.js',
        }),
    ],
    devtool: 'inline-source-map',
});
