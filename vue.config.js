const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    // 关闭语法检查
    lintOnSave: false,
    // 开启代理服务器
    devServer: {
        proxy: {
            '/backend': {// 代理接口前缀为/backend的请求
                target: 'http://localhost:9999', // 对应的代理地址
                secure: false, // 接受运行在https上，默认不接受
                changeOrigin: true, // 如果设置为true,那么本地会虚拟一个服务器接收你的请求并代你发送该请求,这样就不会有跨域问题（只适合开发环境）
                pathRewrite: {'^/backend': ''} //重写路径 比如'/backend/aaa/ccc'重写为'/aaa/ccc'
            }
        }
    }
})
