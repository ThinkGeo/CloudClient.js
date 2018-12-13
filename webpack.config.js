const path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, "/src/index.js"),
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'CloudClient.js',
        library: 'T',
        libraryTarget: 'umd',
        libraryExport: 'default'
    },
    plugins: [
        new CleanWebpackPlugin('dist')
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    }
};