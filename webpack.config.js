const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');

function recursiveIssuer(m) {
  if (m.issuer) {
    return recursiveIssuer(m.issuer);
  } else if (m.name) {
    return m.name;
  } else {
    return false;
  }
}

var config =  {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
    themeDark: path.resolve(__dirname, './src/theme-dark.scss'),
    themeLight: path.resolve(__dirname, './src/theme-light.scss'),
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    },{
      test: /\.html$/,
      use: [
        {
          loader: "html-loader"
        }
      ]
    },{
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        { loader: 'css-loader', options: { sourceMap: true, importLoaders: 2 } },

        { loader: 'sass-loader', options: { sourceMap: true } },
      ]
    }]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        themeDarkStyles: {
          name: 'themeDark',
          test: (m,c,entry = 'foo') => m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
          chunks: 'all',
        },
        themeLightStyles: {
          name: 'themeLight',
          test: (m,c,entry = 'bar') => m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
          chunks: 'all',
        }
      }
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      excludeAssets: [/theme*/] 
    }),
    new HtmlWebpackExcludeAssetsPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};

module.exports = (env, argv) => {
  config.devtool = argv.mode === 'development' ? 'eval-source-map' : 'source-map'
  return config;
}