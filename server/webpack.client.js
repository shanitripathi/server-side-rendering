const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
config = {
  // inform webpack that we are building a bundle for node js and not for the browser

  //   tell webapck the root  file of our server application
  entry: "./src/client/client.js",

  // tell webpack where to put the genereated output file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  //   tell webpack to run babel on every fileit runs through
};

module.exports = merge(baseConfig, config);
