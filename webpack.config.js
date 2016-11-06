var webpack = require('webpack');
module.exports = {
    entry: './app/js/app.js',
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    plugins: [
        new webpack.ProvidePlugin({
            '_': 'lodash'
        })
    ],
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: require.resolve('tinymce/tinymce'),
                loaders: [
                  'imports?this=>window',
                  'exports?window.tinymce'
                ]
            },
            {
                test: /tinymce\/(themes|plugins)\//,
                loaders: [
                  'imports?this=>window'
                ]
            }
        ]
    }
};