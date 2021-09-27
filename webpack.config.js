const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  mode: 'development',
  module: {
    rules: [{
        exclude: /(node_modules)/,
        test: /\.m?js/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                  ['@babel/preset-env', {
                    targets: {
                      node: 10
                    }
                  }]
                ]
            }
        }
    }, {
        test: /\.(css|scss)/,
        use: ['style-loader', 'css-loader', 'sass-loader']
    }, {
      test: /\.html$/,
      use: {
          loader: 'html-loader',
          options: {
            minimize: true,
          },
        }
    },]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'source-map'
};