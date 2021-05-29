const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src'))
    config.output.filename('js/[name].[hash].js').end()
  },
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 启用 CSS modules for all css / pre-processor files.
    requireModuleExtension: true
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://asf-admin.yz.test.autohome.com.cn'
      }
    }
  },
  configureWebpack: (config) => {
    if (['production', 'pre', 'test'].includes(process.env.VUE_APP_NODE_ENV)) {
      return {
        optimization: {
          minimizer: [
            new TerserPlugin({
              sourceMap: false,
              terserOptions: {
                compress: {
                  drop_console: true
                }
              }
            })
          ]
        }
      }
    }
  }
}
