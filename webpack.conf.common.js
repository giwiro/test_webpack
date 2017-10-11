const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const distFolder = 'dist';

module.exports = {
    entry: {
        app: './src/app.js',
    },
    plugins: [
        new CleanWebpackPlugin([distFolder]),
        new HtmlWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, distFolder)
    }
};



