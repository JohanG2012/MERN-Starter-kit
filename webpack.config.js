const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
  DIST: path.resolve(__dirname, './app/server/public'),
  JS: path.resolve(__dirname, './app/client'),
  SRC: path.resolve(__dirname, './app/client')
};

module.exports = {
  entry: path.join(paths.JS, 'app.jsx'),
  output: {
    path: paths.DIST,
    filename: 'app.js'
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html')
    })
  ],
  devServer: {
    port: 3000,
    historyApiFallback: true
  },
  module: {
    // apply loaders to files that meet given conditions
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, '/app/client'),
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['babel-plugin-transform-class-properties']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
  watch: true,
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
