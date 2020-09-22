import utils = require("../Scripts/helper/utils");

/**
 * chips配置
 */
export function config() {
    let serverIp = utils.getServerIp();

    return {
        /**文件服务器*/
        fileServer: "http://10.5.192.161:8001",
        // fileServer: "http://" + serverIp + ":8001",
        siteVersion: '?v=10.3.9',
        /**api地址*/
        /**前端页面调用的Java接口*/
        apiServer: "https://api.test.51jushifu.com",
        // apiServer: "https://api.sczhiwang.com",
        isShowLog: false,
        web_link:'http://test.51jushifu.com',
        share_url:"http://h5.test.51jushifu.com",
    };
}
