const path = require('path');

module.exports = {
  context: path.join(__dirname, '/src'),
  entry: './app.js',
  output: {
    path: path.join(__dirname, 'server/public'),
    filename: 'main.js',
    publicPath: 'server/public'
  },
  mode: 'development',
  module: { 
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
            presets: ['es2015', 'react', 'stage-2'],
          }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  },
  optimization: {}
};