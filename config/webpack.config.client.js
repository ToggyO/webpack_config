const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { StatsWriterPlugin } = require('webpack-stats-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

const baseConfig = require('./webpack.config.base');
const { PATH } = require('./constants/paths');

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
            new TerserPlugin({
                test: /\.js(\?.*)?$/i,
            }),
            // new UglifyJsPlugin({
            //     cache: true,
            //     parallel: true,
            //     sourceMap: false,
            //     uglifyOptions: {
            //         ecma: 8,
            //         compress: false,
            //         mangle: true,
            //     },
            // }),
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
        new CleanWebpackPlugin(),
        new WorkboxPlugin.InjectManifest({
            swSrc: './src/service-worker.js',
            swDest: 'service-worker.js',
        }),
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
        new MiniCssExtractPlugin({
            filename: 'styles.[chunkhash].css',
        }),
    ],
    devtool: 'inline-source-map',
});
