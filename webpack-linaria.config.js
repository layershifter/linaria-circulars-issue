const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  externals: { "@linaria/react": "Linaria" },
  mode: "production",
  output: {
    path: require("path").resolve(__dirname, "./dist/webpack-linaria"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader", options: { sourceMap: false } },
        ],
      },
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: { loader: "@linaria/webpack-loader" },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],
  optimization: {
    minimizer: [],
  },
};
