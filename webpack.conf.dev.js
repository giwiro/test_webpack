const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.conf.common.js');

const port = 5000;

module.exports = merge(common, {
    devtool: 'eval',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: port
    }
});

