var debug = true;
var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: "inline-sourcemap",
    entry: "./src/index",
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: [
                    'react', 'es2015', 'stage-0'
                ],
                plugins: ['transform-class-properties', 'transform-decorators-legacy']
            }
        }, {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass'],
            loader: ''
        }]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ],
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"]
    },
};
