"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chipsUtils = require("../Scripts/helper/utils");
/**
* chips配置
*/
function config() {
    var serverIp = chipsUtils.getServerIp();
    return {
        /**文件服务器*/
        fileServer: "https://jushifu.oss-cn-chengdu.aliyuncs.com/staticfile/mobile",
        siteVersion: '?v=1.0.12',
        /**api地址*/
        /**前端页面调用的Java接口*/
        apiServer: "https://api.51jushifu.com",
        web_link: 'https://www.51jushifu.com',
        share_url: "https://mobile.51jushifu.com",
        isShowLog: false,
    };
}
exports.config = config;
