const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

/**@type {import('webpack').Configuration} */
module.exports = {
    entry:'./src/index.js',
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname ,  '../dist'),
      publicPath : ""
    },
    module: {
      rules: [
        {
          test: /.(js|jsx)$/,
          exclude: /node_modules/,
          use:'babel-loader'
        },
        {
            type : "asset",
            test : /\.(png|svg|jpg|jpeg|gif)$/i
        }
      ]
    },
    resolve : {
        extensions : [".js", ".jsx", ".json"]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template : "./public/index.html"
        }),
        
    ]
  
  };
  