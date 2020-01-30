const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const baseConfig = require('./webpack.config.base');
const paths = require('./constants/paths');


module.exports = merge(baseConfig, {
    mode: 'production',
    entry: paths.appIndexTsx,
    output: {
        filename: 'bundle.[chunkhash].js',
        path: path.appBuild,
        publicPath: '/',
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                test: /\.js(\?.*)?$/i,
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
                test: /\.module\.s(a|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
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
        new ForkTsCheckerWebpackPlugin(),
        new CompressionPlugin(),
        new HtmlWebpackPlugin({
            template: paths.appHtml,
        }),
        new WorkboxPlugin.InjectManifest({
            swSrc: './src/service-worker.ts',
            swDest: 'service-worker.js',
        }),
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.[chunkhash].css',
        }),
    ],
    devtool: 'inline-source-map',
});
