const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const webpackNodeExternals = require("webpack-node-externals");
const config = {
  // inform webpack that we are building a bundle for node js and not for the browser
  target: "node",

  //   tell webapck the root  file of our server application
  entry: "./src/index.js",

  // tell webpack where to put the genereated output file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  externals: [webpackNodeExternals()],
  //   tell webpack to run babel on every fileit runs through
  //   module: {
  //     rules: [
  //       {
  //         test: /\.js?$/,
  //         loader: "babel-loader",
  //         exclude: /node_modules/,
  //         options: {
  //           presets: [
  //             "react",
  //             "stage-0",  NOW ADDED TO THE BASE WEBPACK FILE
  //             [
  //               "env",
  //               {
  //                 targets: {
  //                   browsers: ["last 2 versions"],
  //                 },
  //               },
  //             ],
  //           ],
  //         },
  //       },
  //     ],
  //   },
};

module.exports = merge(baseConfig, config);
