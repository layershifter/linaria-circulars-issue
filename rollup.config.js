const { defineConfig } = require("rollup");

module.exports = defineConfig({
  input: "./src/index.js",
  output: {
    file: "./dist/rollup/main.js",
    format: "cjs",
  },
});
