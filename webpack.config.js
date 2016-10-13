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
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    }
};
