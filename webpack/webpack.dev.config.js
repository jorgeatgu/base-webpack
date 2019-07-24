const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [loaders.CSSLoader, loaders.JSLoader, loaders.ESLintLoader, loaders.HtmlLoader]
    },
    plugins: [plugins.StyleLintPlugin, plugins.HtmlPlugin, plugins.WebpackBuildNotifierPlugin],
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/bundle.js'
    },
    stats: {
        entrypoints: false,
        children: false
    },
    devServer: {
        hot: true,
        open: true
    },
    optimization: {
        minimizer: [plugins.TerserPlugin],
        minimize: true
    }
};
