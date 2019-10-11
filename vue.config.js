/*
 * @Author: ZhuQiMing
 * @CreateTime: 2019/10/8 13:20
 */
// vue.config.js
module.exports = {
    // 部署应用包时的基本 URL
    publicPath: './', // Default: '/'

    // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
    assetsDir: 'static', // Default: ''

    // 是否为生产环境构建生成 source maphome
    productionSourceMap: false, // Default: true

    // 配置 webpack-dev-server 行为
    devServer: {
        host: '0.0.0.0',
        port: 10000,
        https: false, // 是否启用https
        hot: true // 是否热更新
    }
};
