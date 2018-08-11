const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: {
    app: path.join(__dirname, "src/index.js")
  },
  output: {
    path: path.join(__dirname, "public/js"),
    hashDigestLength: 10,
    filename: "[name].[hash].bundle.js"
  },
  mode: "production",
  resolve: {
    extensions: [".js", ".css", ".scss"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, "public/index.html"),
      template: path.join(__dirname, "src/index.html")
    })
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          babelrc: false,
          plugins: ["transform-object-rest-spread"],
          presets: [
            "es2015",
            "react"
          ]
        }
      }
    }, {
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader"
      ]
    }, {
      test: /\.css$/,
      use: [
        "style-loader",
        "css-loader"
      ]
    }]
  }
};

module.exports = config;
