'use strict';

const { join, resolve } = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: [
        join(__dirname, 'app/index.js')
    ],

    output: {
        path: join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            }
        ]
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: resolve(__dirname, 'dist', 'index.html'),
            filename: './index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};

