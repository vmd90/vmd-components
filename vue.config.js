const webpack = require('webpack');
const path = require('path');

module.exports = {
  productionSourceMap: false,
  lintOnSave: false,
  configureWebpack: {
    context: path.resolve(__dirname, './app'),
    entry: {
      app: './main.js'
    },
    // Set up all the aliases we use in our app.
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './app')
      }
    },
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6
      })
    ]
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production',
    loaderOptions: {
      sass: {
        data: `@import "@/assets/styles/_shared.scss";`
      }
    }
  }
};
