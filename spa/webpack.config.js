const webpack = require('webpack');
const Encore = require('@symfony/webpack-encore');
const HtmlWebpackPlugin = require('html-webpack-plugin');

Encore
    .setOutputPath('public/')
    .setPublicPath('/')
    .cleanupOutputBeforeBuild()
    .addEntry('app', './src/app.js')
    .enablePreactPreset()
    .enableSassLoader()
    .enableSingleRuntimeChunk()
    .addPlugin(new HtmlWebpackPlugin({template: 'src/index.ejs', alwaysWriteToDisk: true}))
    // .addPlugin(new webpack.DefinePlugin({
    //     'ENV_API_ENDPOINT': JSON.stringify(process.env.API_ENDPOINT),
    .addPlugin(new webpack.DefinePlugin({
        'ENV_API_ENDPOINT': JSON.stringify("https://localhost:8001/"),
    }))
;

module.exports = Encore.getWebpackConfig();