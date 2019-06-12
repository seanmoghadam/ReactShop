var path = require('path');
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'production',
  entry: ['@babel/polyfill','./src/index.js'],
  resolve: {
    extensions: [".js", ".jsx", ".scss", ".css"]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: "/node-modules/",
        query: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          sourceMaps: true
        }
      },
      {
        test: /\.s?css$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve("./src/index.template.html"),
      publicPath: "/",
      filename: "index.html",
      inject: true
    })
  ]
};




