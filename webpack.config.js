const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
// const ExtractCss = require('extract-text-webpack-plugin');
const readFiles = require('./src/utils/readFiles');

const MODE = process.env.WEBPACK_ENV;
const isDevMode = MODE === 'development';
const ENTRY_PATH = path.resolve(__dirname, 'src', 'assets', 'js');
const SEARCH_FILE_PATH = path.resolve(ENTRY_PATH, 'pages');
const OUTPUT_DIR = path.resolve(__dirname, 'src', 'dist');

module.exports = readFiles(SEARCH_FILE_PATH).then(res => ({
  entry: {
    main: ['@babel/polyfill', path.resolve(ENTRY_PATH, 'main.js')],
    ...res,
  },
  mode: MODE,
  devtool: 'inline-source-map',
  output: {
    path: OUTPUT_DIR,
    filename: 'js/[name].js', // entry : { 'main' } : 'main' -> 'app'으로 바꾸면 name이 app으로 설정됩니다.
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
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
            options: {
              hmr: isDevMode,
            },
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
      filename: isDevMode ? 'css/[name].css' : 'css/[name].[hash].css',
      chunkFilename: isDevMode ? 'css/[id].css' : 'css/[id].[hash].css',
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
    minimize: !isDevMode,
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
}));
