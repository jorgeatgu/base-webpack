const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const JSLoader = {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: [
                '@babel/preset-env',
                '@babel/react',
                {
                    plugins: ['@babel/plugin-proposal-class-properties']
                }
            ]
        }
    }
};
const ESLintLoader = {
    test: /\.js$/,
    enforce: 'pre',
    exclude: /node_modules/,
    use: {
        loader: 'eslint-loader',
        options: {
            configFile: '.eslintrc'
        }
    }
};

const CSSLoaderProduction = {
    test: /\.css$/,
    exclude: /node_modules/,
    use: [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                hmr: process.env.NODE_ENV === 'development',
                reloadAll: true
            }
        },
        {
            loader: 'css-loader',
            options: {
                sourceMap: true,
                importLoaders: 1
            }
        }
    ]
};

const CSSLoader = {
    test: /\.css$/,
    exclude: /node_modules/,
    use: [
        {
            loader: 'style-loader'
        },
        {
            loader: 'css-loader',
            options: {
                sourceMap: true,
                importLoaders: 1
            }
        },
        {
            loader: 'postcss-loader',
            options: {
                config: {
                    path: __dirname + '/postcss.config.js'
                }
            }
        }
    ]
};

const HtmlLoader = {
    test: /\.html$/,
    use: {
        loader: 'html-loader'
    }
};

module.exports = {
    JSLoader: JSLoader,
    ESLintLoader: ESLintLoader,
    CSSLoader: CSSLoader,
    CSSLoaderProduction: CSSLoaderProduction,
    HtmlLoader: HtmlLoader
};
