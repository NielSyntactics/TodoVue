const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  devServer: {
    port: 8000,
    proxy: {
      '^/api/': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/'},
        context: () => true,
      }
    }
  }
}