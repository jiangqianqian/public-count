// dev server，定义反向代理
const devServer = {
  hot: true,
  historyApiFallback: true,
  disableHostCheck: true,
  host: '0.0.0.0',
  port: 8080,
  compress: true,
  stats: {
    colors: true
  },
  headers: { 'X-My-Header': '^_^' }, //自定义返回头
  proxy: {
    '/qfang-agent-api/cameraman/*': {
      changeOrigin: true,

      // target: 'http://172.16.72.130:8090' // 周阳红本地
      target: 'http://192.168.0.41'

      // target: 'http://172.16.6.249:3000',
      // pathRewrite: { // 根据实际情况配置是否需要重写 url
      //   '/qfang-agent-api/cameraman/layout': '/qfang-agent-api/cameraman'
      // }
    },
    '/qfang-agent-api/sdk/getConfig': {
      changeOrigin: true,
      // target: 'http://172.16.72.130:8090' // 周阳红本地
      target: 'http://192.168.0.41' // 周阳红本地
    },
    '/upload/upload/base64Str.json': {
      changeOrigin: true,
      target: 'http://192.168.0.186'
    }
  }
};

module.exports = devServer;
