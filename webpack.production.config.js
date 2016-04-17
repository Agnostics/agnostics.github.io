'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
        entry: [
            path.join(__dirname, 'src/index.js')
        ],
        output: {
            path: path.join(__dirname, '/dist'),
            filename: 'bundle.js',
        },
        plugins: [
            new webpack.optimize.OccurenceOrderPlugin()
        ],
        resolve: {
            extensions: ['', '.js', '.jsx']
        },
        module: {
            loaders: [{
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    include: __dirname,
                    query: {
                        plugins: ['transform-runtime'],
                        presets: ['es2015', 'stage-0', 'react'],
                    }
                }, {
                    test: /\.json?$/,
                    loader: 'json'
                }, {
                    test: /\.scss$/,
                    loaders: ['style', 'css', 'sass'],
                    loader: {
                        test: /\.css?$/,
                        loaders: ['style', 'raw'],
                        include: __dirname
                    },
                    {
                        test: /\.(jpe?g|png|gif|svg)$/,
                        loader: 'url',
                        query: {
                            limit: 10240
                        }
                    }]
            }
        };
