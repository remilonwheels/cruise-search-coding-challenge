const webpack = require('webpack')
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, 
        use: [{ loader: 'babel-loader' }]
      },
      {
        test: /\.html$/,
        use: [{ loader: 'raw-loader'}]
      },
      {
        test: /\.scss$/,
        use: [
            { loader: "style-loader" },
            { loader: "css-loader" },
            { loader: "sass-loader" }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
            }
        }]
    }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index-template.html'})
  ],
  resolve: {
    alias: {
      scss: path.resolve(__dirname, 'src/app/app-scss')
    }
  }
}