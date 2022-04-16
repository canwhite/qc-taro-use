/* eslint-disable import/no-commonjs */
/* eslint-disable no-unused-vars */
const isH5 = process.env.CLIENT_ENV === 'h5'
const HOST = '"http://xxx"'
module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
    //定义在这里的变量在其他部分可以获取
    HOST: isH5 ? '"/api"' : HOST
  },
  mini: {},
  h5: {
    devServer: {
      proxy: {
        '/api/': {
          target: JSON.parse(HOST),
          pathRewrite: {
            '^/api/': '/'
          },
          changeOrigin: true
        }
      }
    }
  }
}


/* Taro.request({
  url,
  data: method === 'POST' ? JSON.stringify(data) : data,
  method,
  header: { 'Content-Type': 'application/json' }
}) */