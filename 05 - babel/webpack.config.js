module.exports = {
  mode: "development",
  devtool: "(none)",
  entry: "./src/main.js",
  output: {
    filename: "app.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                    useBuiltIns: "usage"
                }
              ]
            ]
          }
        }
      }
    ]
  }
};
