const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'client/src/component/App.jsx'),
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client/dist'),
  },
};
