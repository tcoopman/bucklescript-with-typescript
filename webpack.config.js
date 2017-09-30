var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: {
        main: [
            './src/index.ts' // entry point for your application code
        ],
    },
    devtool: "source-map",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: './[name].bundle.js',
        publicPath: '/dist/',
    },
    resolve: {
        extensions: ['.js', '.ts'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: "pre",
                use: [{
                    loader: "source-map-loader"
                }]
            },
            {
                test: /\.tsx?$/,
                loaders: ['ts-loader'],
                exclude: /node_modules/
            },
        ]
    }
};