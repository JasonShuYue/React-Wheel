const HtmlWebpackPlugin = require("html-webpack-plugin");
const baseConfig = require("./webpack.config");

module.exports = Object.assign({}, baseConfig, {
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      title: "React-Wheel",
      template: "index.html",
    }),
  ],
});
