const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpack = require("copy-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "..", "./src/index.tsx"),
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-modules-typescript-loader" },
          { loader: "css-loader", options: { modules: true } },
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "..", "./dist"),
    filename: "[name].[chunkhash].js",
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "index.html"),
    }),
    new CopyWebpack({
      patterns: [{ from: "public", to: "./src/assets" }],
    }),
  ],
};
