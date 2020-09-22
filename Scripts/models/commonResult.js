"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chipsConfig = require("../../config/config");
var commonResult = /** @class */ (function () {
    function commonResult(pTitle, pKeywords, pDescription, customData) {
        if (customData === void 0) { customData = null; }
        this.fileServer = chipsConfig.config().fileServer;
        this.siteVersion = chipsConfig.config().siteVersion;
        this.apiServer = chipsConfig.config().apiServer;
        this.title = pTitle;
        this.keywords = pKeywords;
        this.description = pDescription;
        this.data = customData;
        this.webLink = chipsConfig.config().web_link;
        this.shareUrl = chipsConfig.config().share_url;
    }
    return commonResult;
}());
exports.commonResult = commonResult;
