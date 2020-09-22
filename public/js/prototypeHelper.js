/**
 * 数字类型格式化 eg: 1.format('00'),返回为01
 * @param format
 * @returns {string}
 */
Number.prototype.format = function (format) {
    format = format ? format : "";
    var ts = this.toString();
    if (format.indexOf(".") < 0) {
        if (ts.length >= format.length) {
            return ts;
        }
        else {
            return format.substring(0, format.length - ts.length) + ts;
        }
    }
    else {
        var arrFormat = format.split(".");
        if (arrFormat.length != 2) {
            throw "Invalid format";
        }
        var prevP = Math.floor(this);
        var nextP = (this - prevP).toString().substring(2);
        return prevP.format(arrFormat[0]) + "." + (arrFormat[1].length > nextP.length ? nextP + arrFormat[1].substring(nextP.length) : nextP);
    }
}

/**
 * 日期类型格式化 eg: date.format('yyyy-MM-dd HH:mm:ss') 返回为 2019-02-12 15:52:42
 * @param format
 * @returns {string}
 */
Date.prototype.format = function (format) {
    if (format && typeof (format) === 'string' && format.length > 0) {
        var y = this.getFullYear();
        var M = this.getMonth() + 1;
        var d = this.getDate();
        var h = this.getHours();
        var hi = h > 12 ? h - 12 : h;
        var t = h >= 12 ? "下午" : "上午";
        var m = this.getMinutes();
        var s = this.getSeconds();
        var f = this.getMilliseconds();
        var w = this.getDay();
        var cnW = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
        var rFormat = format;
        rFormat = rFormat.replace(/yyyy/gi, y.format("0000"));
        rFormat = rFormat.replace(/yy/gi, y.format("0000").substring(2));
        rFormat = rFormat.replace(/MM/g, M.format("00"));
        rFormat = rFormat.replace(/M/g, M.toString());
        rFormat = rFormat.replace(/dd/g, d.format("00"));
        rFormat = rFormat.replace(/d/g, d.toString());
        rFormat = rFormat.replace(/HH/g, h.format("00"));
        rFormat = rFormat.replace(/H/g, h.toString());
        rFormat = rFormat.replace(/hh/g, hi.format("00"));
        rFormat = rFormat.replace(/h/g, hi.toString());
        rFormat = rFormat.replace(/mi|mm/gi, m.format("00"));
        rFormat = rFormat.replace(/m/g, m.toString());
        rFormat = rFormat.replace(/ss/g, s.format("00"));
        rFormat = rFormat.replace(/s/g, s.toString());
        rFormat = rFormat.replace(/(f){1,4}/g, function (a, b, c) {
            return c.format("0000".substring(0, a.length));
        });
        rFormat = rFormat.replace(/tt|t/g, t);
        rFormat = rFormat.replace(/w/gi, cnW[w]);
        return rFormat;
    }
    else {
        return this.toString();
    }
}

/**
 * 获取日期的年月日部分
 * @returns {Date}
 */
Date.prototype.date = function () {
    return new Date(this.getFullYear(), this.getMonth(), this.getDate());
}

/**
 * 将日期字符串装变为日期类型
 * @returns {*}
 */
String.prototype.tryParseDate = function () {
    // 年-月-日 时:分:秒 格式
    var regDate = /^([0-9]{4})[-\/\.]([0-9]{1,2})[-\/\.]([0-9]{1,2})(T|GMT| )([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})(\.([0-9]{1,3}))?([0-9]+)?(\+[0-9]{1,2}:[0-9]{1,2})?$/i;
    var arrReg = regDate.exec(this);
    if (arrReg) {
        var month = arrReg[2], date = arrReg[3], hour = arrReg[5] || "0", min = arrReg[6] || "0",
            sec = arrReg[7] || "0", mil = arrReg[9] || "0";
        var dt = new Date(parseInt(arrReg[1], 10), parseInt(arrReg[2], 10) - 1, parseInt(arrReg[3], 10), parseInt(arrReg[5] || "0", 10), parseInt(arrReg[6] || "0", 10), parseInt(arrReg[7] || "0", 10), parseInt(arrReg[9] || "0", 10));
        return dt;
    }

    
    regDate = /^([0-9]{4})[-\/\.]([0-9]{1,2})[-\/\.]([0-9]{1,2})?$/i;
    arrReg = regDate.exec(this);
    if (arrReg) {
        var month = arrReg[2], date = arrReg[3], hour = arrReg[5] || "0", min = arrReg[6] || "0",
            sec = arrReg[7] || "0", mil = arrReg[9] || "0";
        var dt = new Date(parseInt(arrReg[1], 10), parseInt(arrReg[2], 10) - 1, parseInt(arrReg[3], 10));
        return dt;
    }


    regDate = /Date\(([0-9]+)\)/i;
    arrReg = regDate.exec(this);
    if (arrReg) {
        return new Date(parseInt(arrReg[1], 10));
    }
    return null;
};

/**
 * 以什么开始
 * @param prefix
 * @returns {boolean}
 */
String.prototype.startWith = function (prefix) {
    return this.indexOf(prefix) == 0;
}

/**
 * 判断指定值是否存在该数组中
 * @param data
 * @returns {boolean}
 */
Array.prototype.contains = function (data) {
    for (var i = 0; i < this.length; ++i) {
        if (this[i] == data) {
            return true;
        }
    }
    return false;
}

/**
 * 查找元素索引，未找到则返回-1
 * @param item
 * @returns {number}
 */
Array.prototype.indexOf = function (item) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == item) return i;
    }
    return -1;
};

/**
 * 移除指定元素
 * @param item
 * @returns {boolean} true: 移除成功, false: 移除失败
 */
Array.prototype.remove = function (item) {
    var index = this.indexOf(item);
    if (index > -1) {
        this.splice(index, 1);
    }
}

/**
 * 移除指定元素
 * @param item
 * @returns {boolean} true: 移除成功, false: 移除失败
 */
Array.prototype.removeAll = function (item) {
    while(true) {
        var index = this.indexOf(item);
        if (index > -1) {
            this.splice(index, 1);
        } else {
            break;
        }
    }
    
}

/**
 * 移除重复元素
 */
Array.prototype.distinct = function () {
    var newArray = [];
    for (var i = 0; i < this.length; i++) {
        var item = this[i];
        if (newArray.contains(item) == false) {
            newArray.push(item);
        }
    }
    return newArray;
}
/**
 * 获取当前时间
 */
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
}