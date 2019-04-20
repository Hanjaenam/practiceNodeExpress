const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
// const ExtractCss = require('extract-text-webpack-plugin');

const MODE = process.env.WEBPACK_ENV;
const devMode = MODE === 'development';
const ENTRY_FILE = path.resolve(__dirname, 'src', 'assets', 'js', 'main.js');
const OUTPUT_DIR = path.resolve(__dirname, 'src', 'dist');

const config = {
  entry: ['@babel/polyfill', ENTRY_FILE],
  mode: MODE,
  devtool: 'inline-source-map',
  output: {
    path: OUTPUT_DIR,
    filename: '[name].js', // entry : { 'main' } : 'main' -> 'app'으로 바꾸면 name이 app으로 설정됩니다.
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [autoprefixer({ browsers: 'cover 99.5%' })];
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: devMode ? 'styles.css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
    }),
    // new HtmlWebpackPlugin({
    //   title: 'practice',
    //   template: 'src/dist/test.html',
    // }),
  ],
  optimization: {
    minimize: !devMode,
    minimizer: [new TerserJSPlugin(), new OptimizeCssAssetsPlugin()],

    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
};

module.exports = config;
