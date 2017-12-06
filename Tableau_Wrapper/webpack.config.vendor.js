const { AureliaPlugin, ModuleDependenciesPlugin } = require('aurelia-webpack-plugin');

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('vendor.css');

module.exports = ({ prod } = {}) => {
    const isDevBuild = !prod;

    return [{
        stats: { modules: false },
        resolve: {
            extensions: ['.js']
        },
        module: {
            loaders: [
                { test: /\.(png|jpg|jpeg|gif|woff|woff2|eot|ttf|svg)(\?|$)/, loader: 'url-loader?limit=100000' },
                { test: /\.css(\?|$)/, loader: extractCSS.extract([isDevBuild ? 'css-loader' : 'css-loader?minimize']) }
            ]
        },
        entry: {
            vendor: [
                'aurelia-loader-webpack',
                'aurelia-event-aggregator',
                'aurelia-fetch-client',
                'aurelia-framework',
                'aurelia-history-browser',
                'aurelia-logging-console',
                'aurelia-pal-browser',
                'aurelia-polyfills',
                'aurelia-route-recognizer',
                'aurelia-router',
                'aurelia-templating-binding',
                'aurelia-templating-resources',
                'aurelia-templating-router',
                'aurelia-dialog',
                'bootstrap',
                'bootstrap/dist/css/bootstrap.min.css',
                'font-awesome/css/font-awesome.min.css',
                'jquery',
                'jquery-contextmenu',
                'whatwg-fetch',
                'tableau-api',
                'velocity-animate',
                'tether',
                'aurelia-bootstrap'
            ],
        },
        output: {
            path: path.join(__dirname, 'Scripts'),
            publicPath: 'Scripts/',
            filename: '[name].js',
            library: '[name]_[hash]',
        },
        plugins: [
            extractCSS,
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                "window.jQuery": "jquery",
                "Tether": 'tether'
            }), // Maps these identifiers to the jQuery package (because Bootstrap expects it to be a global variable)
            new webpack.DllPlugin({
                path: path.join(__dirname, 'Scripts', '[name]-manifest.json'),
                name: '[name]_[hash]'
            })
        ].concat(isDevBuild ? [] : [
            new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
        ])
    }]
};
