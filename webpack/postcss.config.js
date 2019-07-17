module.exports = {
    plugins: {
        'postcss-import': {},
        'postcss-nested': {},
        'postcss-custom-selectors': {},
        'postcss-custom-properties': {},
        'postcss-preset-env': {
            browsers: 'last 2 versions'
        },
        'postcss-normalize': {
            browsers: 'last 2 versions',
            forceImport: true
        },
        'cssnano': {}
    }
};
