const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const glob = require("glob");
const PurifyCSSPlugin = require("purifycss-webpack");

var isProd = process.env.NODE_ENV === "production"; //true or false
var cssDev = [
  {
    loader: "style-loader",
    options: {
      sourceMap: true,
      convertToAbsoluteUrls: true
    }
  },
  "css-loader",
  "sass-loader"
];
var cssProd = ExtractTextPlugin.extract({
  fallback: "style-loader",
  use: ["css-loader?sourceMap", "sass-loader?sourceMap"],
  publicPath: "/dist"
});

var cssConfig = isProd ? cssProd : cssDev;

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"], //An empty string is no longer required.
    modules: ["node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.scss$/, // scss file types
        use: cssConfig
      },
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }, //js and jsx file types
      {
        test: /\.(gif|png|jpe?g|svg)$/i, //image format files
        loaders: [
          "file-loader?name=[name].[ext]&outputPath=assets/",
          'image-webpack-loader?{optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}, mozjpeg: {quality: 65}}' //quality check and compression of images
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/, //font file types
        use: ["file-loader"]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"), //server to show which folder to be served.
    compress: true,
    stats: "errors-only", //show only errors in the terminal can use quite: true but it do not show errors or warning so this is used.
    open: false, //open in new window in dev mode.
    hot: true, //Hot Module Replacement is enabled.
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Boilerplate",
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      template: "./src/index.html"
    }),
    new ExtractTextPlugin({
      filename: "bundle.css",
      disable: !isProd,
      allChunks: true
    }),
    new PurifyCSSPlugin({
      paths: glob.sync(path.join(__dirname, 'src/*.html')),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new BrowserSyncPlugin(
      {
        host: "localhost",
        port: 3000,
        proxy: "http://localhost:8080/",
        files: [
          {
            match: ["**/*.html"],
            fn: function(event, file) {
              if (event === "change") {
                const bs = require("browser-sync").get("bs-webpack-plugin");
                bs.reload();
              }
            }
          }
        ]
      },
      {
        reload: false
      }
    ),
    new webpack.NamedModulesPlugin(),
    new CleanWebpackPlugin(["dist"])
  ],
  devtool: "source-map"
};
