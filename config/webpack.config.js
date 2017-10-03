const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const path = require('path');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        './src/index.js'
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public', 'bundle'),
        chunkFilename: '[name]-[id].js'
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 3000,
        contentBase: path.resolve(__dirname, '..', 'public'),
        historyApiFallback: true,
        hot: true,
        // open: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [
                    'babel-loader',
                ],
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin([path.resolve(__dirname, '..', 'public', 'bundle')]),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '..', 'src', 'index.html')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        })
    ],
};