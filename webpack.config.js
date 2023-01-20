module.exports = {
  externals: { "@linaria/react": "Linaria" },
  mode: "production",
  output: {
    path: require("path").resolve(__dirname, "./dist/webpack"),
  },
  optimization: {
    minimizer: [],
  },
};
