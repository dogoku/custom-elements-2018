const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

var babelConfig = {
  babelrc: false,
  presets: [[
    '@babel/preset-env', {
      useBuiltIns: true,
      modules: false,
      targets: {
        browsers: [
          'last 2 Chrome versions', 'not Chrome < 60',
          'last 2 Safari versions', 'not Safari < 10.1',
          'last 2 iOS versions', 'not iOS < 10.3',
          'last 2 Firefox versions', 'not Firefox < 54',
          'last 2 Edge versions', 'not Edge < 15',
        ]
      }
    }
  ]],
  plugins: [
    '@babel/plugin-transform-async-to-generator',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-dynamic-import'
  ]
}

var config =  {
  resolve: {
    modules: [
      path.resolve(__dirname, './src'),
      path.resolve(__dirname, './src/components'),
      path.resolve(__dirname, './node_modules')
    ]
  },
  entry: {
    main: path.resolve(__dirname, './src/index.js')
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: babelConfig
      }
    },{
      test: /\.html$/,
      use: [
        {
          loader: 'html-loader'
        }
      ]
    },{
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        { loader: 'css-loader', options: { sourceMap: true, importLoaders: 2 } },
        { loader: 'sass-loader', options: { sourceMap: true, includePaths: ['./src'] } },
      ]
    }]
  },
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       themeDarkStyles: {
  //         name: 'themeDark',
  //         test: (m,c,entry = 'foo') => m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
  //         chunks: 'all',
  //         enforce: true
  //       },
  //       themeLightStyles: {
  //         name: 'themeLight',
  //         test: (m,c,entry = 'bar') => m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
  //         chunks: 'all',
  //         enforce: true
  //       }
  //     }
  //   }
  // },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
      excludeAssets: [/theme*/]
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css'
    })
  ]
};

module.exports = (env, argv) => {
  config.devtool = argv.mode === 'development' ? 'eval-source-map' : 'source-map'
  return config;
}