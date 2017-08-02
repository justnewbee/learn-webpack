const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js"
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: "ts-loader"
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: ["es3ify-loader", {
        loader: "babel-loader",
        options: {
          presets: ["env"]
        }
      }]
    }, {
      test: /\.(css|less)$/,
      use: ExtractTextPlugin.extract({
        use: ["css-loader", "postcss-loader", "less-loader"],
        fallback: "style-loader" // use style-loader in development
      })
    }]
  },
  plugins: [ // 增加 Plugin
    new ExtractTextPlugin("index.css"),
  ]
};
