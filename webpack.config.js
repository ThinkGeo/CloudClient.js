const webpack = require('webpack');

var developConfig = {
    entry: './src/index.js',
    devtool: 'source-map',
    output: {
        filename: 'cloudclient-dev.js',
        library: 'tg',
        libraryTarget: 'umd',
        libraryExport: 'default'
    },
    mode: 'development',
    devServer: {
        openPage: "./samples",
        host: 'localhost',
        compress: true,
        port: 8080
    }
}

var legacyConfig = {
    entry: './src/index.js',
    devtool: 'source-map',
    mode: 'production',
    output: {
        filename: 'cloudclient.js',
        library: 'tg',
        libraryTarget: 'umd',
        libraryExport: 'default'
    }
}

module.exports = [developConfig, legacyConfig];