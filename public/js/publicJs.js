//判断安卓ios系统返回
var Click = "";
var phoneSystem
var browser = {
    versions: function () {
        var u = navigator.userAgent, app = navigator.appVersion;
        return { //移动终端浏览器版本信息 
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端 
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器 
            iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器 
            iPad: u.indexOf('iPad') > -1, //是否iPad 
        };
    }(),
}
if (browser.versions.iPhone || browser.versions.iPad || browser.versions.ios) {
    Click = "click touchstart";
    phoneSystem = 'ios';
}
if (browser.versions.android) {
    Click = "click";
    phoneSystem = "android"
}
  //根据设计图来设置除数，比如说是i6就除以7.5那font-size就是50px,1rem=100rpx;
  window.onload = function () {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px'
    document.getElementsByTagName("body")[0].style.display = 'block';
}

//按参数名取得参数值
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return r[2]; return '';
}

//数据缓存
function saveLS(key, value) {
    if (window.localStorage) {
        localStorage.setItem(key, value);
    }
}

//获取缓存
function getLS(key) {
    if (window.localStorage) {
        return localStorage.getItem(key);
    }
    return null;
}

//删除缓存
function delLS(key) {
    if (window.localStorage) {
        localStorage.removeItem(key);
    }
}


//删除缓存
function delSS(key) {
    if (window.sessionStorage) {
        sessionStorage.removeItem(key);
    }
}


//数据缓存
function saveSS(key, value) {
    if (window.sessionStorage) {
        sessionStorage.setItem(key, value);
    }
}

//获取缓存
function getSS(key) {
    if (window.sessionStorage) {
        return sessionStorage.getItem(key);
    }
    return null;
}

//设置cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

//获取cookie
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}


// 网络请求。
// 对象传参
function ajax(url, data, callback, requestType, towDirectory) {
    $.ajax({
        url: apiServer + "/" + towDirectory + url ,
        // url:`${apiServer}${towDirectory==""?"":"/"+towDirectory}${url}?WEB_TOKEN=${getQueryString('token')}`,

        type: $.trim(requestType) == '' ? projectData.REQUEST_TYPE.GET : requestType,
        headers:{'Content-Type':'application/x-www-form-urlencoded','WEB-TOKEN':getQueryString('token')},
        dataType: "JSON",
        data: data,
        success: function (res) {

            callback && callback(res);
        },
        complete: function () {
        }

    })
}

// json字符串传参
function ajaxJSON(url, data, callback, requestType, towDirectory) {

    $.ajax({
        url: apiServer + "/" + towDirectory + url,
        type: $.trim(requestType) == '' ? projectData.REQUEST_TYPE.GET : requestType,
        contentType: "application/json",
        headers:{'Content-Type':'application/json;charset=utf8','WEB-TOKEN':getQueryString('token')},
        dataType: "JSON",
        data: JSON.stringify(data),
        success: function (res) {

            callback && callback(res);
        },
        complete: function () {
        }

    })
}



//上传图片
function compress(e, c) {
    EXIF.getData(e.currentTarget.files[0], function () {
        EXIF.getAllTags(this);
        Orientation = EXIF.getTag(this, 'Orientation');
    });
    layer.msg("图片上传中")
    var file = e.currentTarget.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    e.currentTarget.files.length = 0;
    reader.onload = function (e) {
        var image = $('<img/>');
        image.on('load', function () {
            var square = 700;
            var canvas = document.createElement('canvas');
            canvas.width = this.width;
            canvas.height = this.height;
            var ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, square, square);
            var imgWidth = this.width;
            var imgHeight = this.height;
            var offsetX = 0;
            var offsetY = 0;
            ctx.drawImage(this, offsetX, offsetY, imgWidth, imgHeight);
            if ($.trim(Orientation) != 1) {    //小米6竖着拍摄旋转问题
                switch (Orientation) {
                    case 6:     // 旋转90度
                        canvas.width = imgHeight;
                        canvas.height = imgWidth;
                        ctx.rotate(Math.PI / 2);
                        ctx.fillStyle = "#fff";
                        ctx.fillRect(0, 0, imgWidth, imgHeight);
                        ctx.drawImage(this, 0, -imgHeight);
                        break;
                    case 3:     // 旋转180度
                        ctx.rotate(Math.PI);
                        ctx.fillStyle = "#fff";
                        ctx.fillRect(0, 0, imgWidth, imgHeight);
                        ctx.drawImage(this, -imgWidth, -imgHeight);
                        break;
                    case 8:     // 旋转-90度
                        canvas.width = imgHeight;
                        canvas.height = imgWidth;
                        ctx.rotate(3 * Math.PI / 2);
                        ctx.fillStyle = "#fff";
                        ctx.fillRect(0, 0, imgWidth, imgHeight);
                        ctx.drawImage(this, -imgWidth, 0, imgWidth, imgHeight);
                        break;
                }
            }

            var data = canvas.toDataURL('image/jpeg', 0.2);
            c(data);
        });
        image.attr('src', e.target.result);
    };
}
/**
 * 获取海报模板名称
 * @param templateId
 */
function getPosterTemplateName(templateId) {
    for (var i = 0; i < projectData.POSTER_TEMPLATE.length; i++) {
        var item = projectData.POSTER_TEMPLATE[i];
        if (item.id == templateId) {
            return item.name;
        }
    }
}

/**
 * 
 * @param {添加isSeleced的属性} target 
 */
function addIsSelectAttr(target) {
    if (target instanceof Array) {
        for (let i = 0; i < target.length; i++) {
            target[i].isSeleced = false;
        }
    }
}

// 随机可能需要的数据9个
function random() {
    var resilt = []
    var temporaryArr = []
    while (true) {
        temporaryArr.push(mayNeedData.NEED_DATA[Math.floor(Math.random() * mayNeedData.NEED_DATA.length)]);
        resilt = temporaryArr.filter(function (element, index, self) {
            return self.indexOf(element) === index;
        });
        if (resilt.length == 9) {
            break;
        }
    }
    return resilt;
}

// 随机可能需要的数据19个
function randomNumber() {
    var resilt = []
    var temporaryArr = []
    while (true) {
        temporaryArr.push(mayNeedData.NEED_DATA[Math.floor(Math.random() * mayNeedData.NEED_DATA.length)]);
        resilt = temporaryArr.filter(function (element, index, self) {
            return self.indexOf(element) === index;
        });
        if (resilt.length == 19) {
            break;
        }
    }
    return resilt;
}

// 判断手机是否合法
var TEL_REGEXP = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;



/**
 * 设置分享信息
 */
function setShareInfo(title, desc, link, imgUrl) {
    wx.onMenuShareTimeline({
        title: title, // 分享标题
        link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: imgUrl, // 分享图标
    });
    wx.onMenuShareAppMessage({
        title: title, // 分享标题
        desc: desc, // 分享描述
        link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: imgUrl, // 分享图标
    });

    wx.updateAppMessageShareData({
        title: title, // 分享标题
        desc: desc, // 分享描述
        link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: imgUrl, // 分享图标

    })

    wx.updateTimelineShareData({
        title: title, // 分享标题
        link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: imgUrl, // 分享图标
    })
}

// 判断是否在qq或微信
function is_weixn_qq() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return "weixin";
    } else if (ua.match(/QQ/i) == "qq") {
        return "QQ";
    }
    return false;
}


// 日期格式转换
function date_switch(item) {
    var result = "";
    if (typeof (item) == "string") {
        result = item.tryParseDate().format("yyyy年MM月dd日");
    }
    return result
}