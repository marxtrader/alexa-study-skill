const path = require("path");
const webpack = require("webpack");
const config = require('./config/config')

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: config.server.port,
    publicPath: `http://${config.server.host}/dist/`,
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
