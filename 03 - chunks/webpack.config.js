const webpack = require('webpack');

module.exports = {
  mode: "development",
  devtool: "inline-source-code",
  entry: {
    "user-profile": "./src/user-profile.js",
    products: "./src/products.js"
  },
  output: {
    filename: "[name].js"
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 0,
    }
  },
};
