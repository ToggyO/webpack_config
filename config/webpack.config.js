const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-react',
                            ['@babel/env', { targets: { browsers: ['last 7 versions'] } }]
                        ]
                    }
                }
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
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
};
