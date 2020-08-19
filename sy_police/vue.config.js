const WebpackDeepScopePlugin = require('webpack-deep-scope-plugin').default
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
   publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  outputDir: 'dist',
  assetsDir: 'assets',
  lintOnSave: false,
  runtimeCompiler: true,
  productionSourceMap: false,
  css: {
    extract: false,
    sourceMap: true,
    loaderOptions: {
      sass: {
        prependData: `@import "/assets/style/_variables.scss";`
      }
    }
  },
  configureWebpack: {
    entry: ['@babel/polyfill', './src/main.js'],
    externals: {// 不打包的
      // 'vue': 'Vue',
      // 'element-ui': 'ELEMENT',
      // 'echarts': 'echarts'
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '/components': resolve('src/components'),
        '/assets': resolve('src/assets'),
        '/views': resolve('src/views'),
        '/api': resolve('src/api'),
        '/utils': resolve('src/utils')
      }
    },
    plugins: [
      new WebpackDeepScopePlugin()
    ]
  },
  devServer: {
    hot: true,
    host: '127.0.0.1',
    port: 3737,
    https: false,
    open: true
  }
}
