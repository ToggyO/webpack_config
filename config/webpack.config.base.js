const paths = require('./constants/paths');
// console.table(paths.resolveApp('src/store/'))
module.exports = {
    target: 'web',
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-react',
                                ['@babel/env', { targets: { browsers: ['last 7 versions'] } }],
                            ],
                        },
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                        },
                    },
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-react',
                            ['@babel/env', { targets: { browsers: ['last 7 versions'] } }],
                        ],
                    },
                },
            },
            // {
            //     test: /\.css$/,
            //     use: ['postcss-loader'],
            // }
        ],
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        alias: {
            '@components': paths.resolveApp('src/components/'),
            '@config': paths.resolveApp('src/config/'),
            '@store': paths.resolveApp('src/store/'),
            '@pages': paths.resolveApp('src/pages/'),
            '@routes': paths.resolveApp('src/routes.ts'),
            // '@services': paths.resolveApp('src/services/'),
            '@styles': paths.resolveApp('src/styles/'),
            '@utils': paths.resolveApp('src/utils/'),
        },
    },
};
