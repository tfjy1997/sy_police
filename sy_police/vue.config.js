


module.exports = {

  // 基本路径
  publicPath: '/',

  // 输出目录
  outputDir: 'dist',

  // 放置静态资源的目录
  assetsDir: 'assets',

  // 指定生成的htnl文件路径(相当于assetsDir)
  indexPath: 'index.html',

  // 文件名哈希
  filenameHashing: false,

  //  多页面配置， 默认是 undefind
  // pages: { ... }

  // 是否在保存的时候使用 ‘eslint-loader’ 进行检查
  // lintOnSave: true,

  // 是否包含运行时编辑器Vue， true后可在Vue组件中使用template选项，应用将额外增加10kb左右
  runtimeCompiler: false,

  // babel-loader显式转译依赖
  transpileDependencies: [],

  // 生产环境是否需要source map, 关闭以加速生产环境
  // produtionSourceMap: true,

  // Css相关
  css: {
    // 将组件内的css提取到一个单独的 css 文件 （只用在生产环境中）
    // 也可以是一个传递给 ‘extract-text-webpack-plugin’的选项对象
    extract: true,

    // 是否开启 CSS source map？
    sourceMap: false,

    // 为预处理器的 loader 传递自定义选项。比如传递给
    // Css-loader时，使用‘ { Css：{ ... }} ’
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/style/_variables.scss";`
      }
    },

    // 为所有的CSS 及其预处理文件开启 CSS Modules
    // 这个选项不会影响 ‘ *.vue ’ 文件
    modules: false,
  },

  // 配置webpack-dev-server 行为
  devServer: {
    hot: true,
    port: 8088,
    proxy: {
      '/api': {
        target: 'http://app.rmsdmedia.com',
        pathRewrite: {
          "^/api": ''
        }
      }
    }
  }
}