const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: {
    app: path.join(__dirname, "src/index.js")
  },
  output: {
    path: path.join(__dirname, "public"),
    filename: "[name].bundle.js"
  },
  mode: "development",
  resolve: {
    extensions: [".js", ".json"]
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, "public/index.html"),
      template: path.join(__dirname, "src/index.html")
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    historyApiFallback: true,
    hot: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            babelrc: false,
            presets: [
              "es2015",
              "react"
            ]
          }
        }
      }
    ]
  }
};

module.exports = config;
