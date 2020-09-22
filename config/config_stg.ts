﻿import chipsUtils = require("../Scripts/helper/utils");
/**
 * chips配置
 */
export function config() {
    let serverIp = chipsUtils.getServerIp();

    return {

        /**文件服务器*/
        fileServer: "http://llfileserver.oss-cn-hangzhou.aliyuncs.com/StaticFile_Test/jushifu",
        siteVersion: '?v=1.0.15',
        /**api地址*/
        /**前端页面调用的Java接口*/
        apiServer: "https://api.test.51jushifu.com",
        web_link:'http://test.51jushifu.com',
        share_url:"http://h5.test.51jushifu.com",
        isShowLog: false,
    };
}
