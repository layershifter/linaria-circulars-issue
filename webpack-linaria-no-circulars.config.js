const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  externals: { "@linaria/react": "Linaria" },
  mode: "production",
  entry: "./src/index-no-circulars.js",
  output: {
    path: require("path").resolve(
      __dirname,
      "./dist/webpack-linaria-no-circulars"
    ),
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
