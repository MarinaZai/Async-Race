const webpack = require('webpack');
const CopyWebpack = require("copy-webpack-plugin");

module.exports = {
    mode: "production",
    devtool: "source-map",
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('prod')
        }),
        new CopyWebpack({
            patterns: [{ from: "public", to: "./" }],
          }),
    ]
}