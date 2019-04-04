const path = require('path');

const MODE = process.env.NODE_ENV;
const ENTRY_FILE = path.resolve(__dirname, './src/assets');
const OUTPUT_DIR = path.resolve(__dirname, './src/static');

module.exports = {
  mode: MODE,
  entry: {
    main: ENTRY_FILE,
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: OUTPUT_DIR,
  },
};
