const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');

module.exports = {
    entry: ['./src/app.js'],
    module: {
        rules: [loaders.CSSLoader, loaders.JSLoader, loaders.ESLintLoader, loaders.HtmlLoader]
    },
    plugins: [plugins.StyleLintPlugin, plugins.MiniCssExtractPlugin, plugins.HtmlPlugin, plugins.PrettierPlugin],
    output: {
        path: path.resolve('public'),
        filename: '[name].bundle.js'
    },
    stats: {
        entrypoints: false,
        children: false
    },
    devServer: {
        contentBase: path.resolve('public'),
        compress: true,
        open: true,
        port: 9000
    },
    optimization: {
        minimizer: [plugins.TerserPlugin],
        minimize: true
    }
};
