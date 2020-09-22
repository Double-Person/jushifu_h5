import chipsConfig = require("../../config/config");

export class commonResult {
    //静态资源服务器
    fileServer: string;
    siteVersion: string;
    title: string;
    keywords: string;
    description: string;
    apiServer: string;
    webLink:string;
    shareUrl:string;
    /**用户自定义数据*/
    data: any;

    constructor(pTitle: string, pKeywords: string, pDescription: string, customData: any = null) {
        this.fileServer = chipsConfig.config().fileServer;
        this.siteVersion = chipsConfig.config().siteVersion;
        this.apiServer = chipsConfig.config().apiServer;
        this.title = pTitle;
        this.keywords = pKeywords;
        this.description = pDescription;
        this.data = customData;
        this.webLink = chipsConfig.config().web_link;
        this.shareUrl=chipsConfig.config().share_url;
    }
}
