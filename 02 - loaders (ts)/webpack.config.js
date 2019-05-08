module.exports = {
  mode: "development",
  devtool: "(none)",
  entry: "./src/calculator.js",
  output: {
    filename: "./app.js"
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: "ts-loader" }
    ]
  }
};
