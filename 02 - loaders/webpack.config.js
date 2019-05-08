module.exports = {
  mode: "development",
  devtool: "(none)",
  entry: "./src/calculator.js",
  output: {
    filename: "app.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 25000
          }
        }
      }
    ]
  }
};
