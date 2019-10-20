/*
 * @Author: ZhuQiMing
 * @CreateTime: 2019/10/8 13:20
 */
// vue.config.js
module.exports = {
    publicPath: './',
    assetsDir: 'static',
    productionSourceMap: false,
    devServer: {
        host: '0.0.0.0',
        port: 10000,
        https: false,
        hot: true
    }
};
