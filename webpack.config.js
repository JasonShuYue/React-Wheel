const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // mode: "development",
  mode: "production",
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
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "React-Wheel",
      template: "index.html",
    }),
  ],
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      root: "React",
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "react-dom",
      root: "ReactDOM",
    },
  },
};
