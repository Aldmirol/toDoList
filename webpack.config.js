const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: './src/frontend/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'ToDoList',
            template: path.resolve(__dirname, './src/frontend/index.html')
        }),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                exclude: /\.module.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.module.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                compileType: 'module',
                                localIdentName: '[local]_[hash:base64:5]',
                                exportLocalsConvention: 'camelCaseOnly',
                            }
                        }
                    },
                    'sass-loader',
                ],
            },
        ],
    },
};