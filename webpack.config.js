const webpack = require('webpack');

var developConfig = {
    entry: './src/index.js',
    devtool: 'source-map',
    output: {
        filename: 'CloudClient.js',
        library: 'T',
        libraryTarget: 'umd',
        libraryExport: 'default'
    },
    mode: 'development',
    devServer: {
        openPage: "./debug",
        host: 'localhost',
        compress: true,
        port: 8080
    }
}
module.exports = [developConfig];