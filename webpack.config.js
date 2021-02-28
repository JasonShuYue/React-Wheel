const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./lib/index.tsx",
  },
  output: {
    path: path.resolve(__dirname, "dist/lib"), // 因为windows，mac系统的差别，对目录相对路径符号的不同，比如'/'，进行兼容
    libraryTarget: "umd", // 「commonJS(Node)」+「amd(浏览器)」兼容， 最终导出定义的格式
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "awesome-typescript-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "React-Wheel",
      template: "index.html",
    }),
  ],
};
