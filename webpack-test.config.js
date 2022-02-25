const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(
    __dirname,
    "src",
    "pipe_oc_assets",
    "src",
    "test",
    "index.js"
  ),
  output: {
    path: path.resolve(__dirname, "dist", "test"),
    filename: "bundle.js",
  },
};
