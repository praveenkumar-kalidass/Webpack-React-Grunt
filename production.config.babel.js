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
    extensions: [".js", ".json"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, "public/index.html"),
      template: path.join(__dirname, "src/index.html")
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015"]
          }
        }
      }
    ]
  }
};

module.exports = config;
