const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");



module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js",
  }
  ,
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "inline-source-map",

  devServer: {
    contentBase: './public',
    watchContentBase: true,
    hot: true, // если инлайново добавить --hot то можно не указывать в конфиге
  },

  plugins: [
    new CleanWebpackPlugin(), // clean dist
    new HtmlWebpackPlugin({ 
      template: './public/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(), // если инлайново добавить --hot то можно не указывать в конфиге
  ],
   module: {
    rules: [
    {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/, 
        use: [
          'file-loader'
        ]
      }

    ]
  },
};


