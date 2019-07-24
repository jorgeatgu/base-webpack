const path = require('path');
const _MiniCssExtractPlugin = require('mini-css-extract-plugin');
const _StyleLintPlugin = require('stylelint-webpack-plugin');
const _HtmlPlugin = require('html-webpack-plugin');
const _TerserPlugin = require('terser-webpack-plugin');
const _PrettierPlugin = require('prettier-webpack-plugin');
const _WebpackBuildNotifierPlugin = require('webpack-build-notifier');

const WebpackBuildNotifierPlugin = new _WebpackBuildNotifierPlugin({
    title: 'WebPack Project',
    suppressSuccess: true
});

const MiniCssExtractPlugin = new _MiniCssExtractPlugin({
    filename: 'css/bundle.css',
    chunkFilename: '[id].css'
});

const StyleLintPlugin = new _StyleLintPlugin({
    configFile: path.resolve(__dirname, 'stylelint.config.js'),
    context: path.resolve(__dirname, '../src/'),
    files: '**/*.css',
    failOnError: false,
    quiet: false
});

const HtmlPlugin = new _HtmlPlugin({
    hash: true,
    template: './src/index.html'
});

const TerserPlugin = new _TerserPlugin({});

const PrettierPlugin = new _PrettierPlugin({
    trailingComma: 'none',
    tabWidth: 4,
    semi: true,
    singleQuote: true,
    arrowParens: 'always'
});

module.exports = {
    WebpackBuildNotifierPlugin: WebpackBuildNotifierPlugin,
    MiniCssExtractPlugin: MiniCssExtractPlugin,
    StyleLintPlugin: StyleLintPlugin,
    HtmlPlugin: HtmlPlugin,
    TerserPlugin: TerserPlugin,
    PrettierPlugin: PrettierPlugin
};
