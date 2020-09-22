"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commonResult_1 = require("../Scripts/models/commonResult");
/* GET home page. */
function index(req, res) {
    var result = new commonResult_1.commonResult("index", "", "", null);
    res.render('index.html', result);
}
exports.index = index;
function invite(req, res) {
    var result = new commonResult_1.commonResult("邀请返利", "", "", null);
    res.render('invite.html', result);
}
exports.invite = invite;
function reviews(req, res) {
    var result = new commonResult_1.commonResult("客户评价", "", "", null);
    res.render('reviews.html', result);
}
exports.reviews = reviews;
function checkin(req, res) {
    var result = new commonResult_1.commonResult("我的签到", "", "", null);
    res.render('checkin.html', result);
}
exports.checkin = checkin;
function arbitration(req, res) {
    var result = new commonResult_1.commonResult("退款仲裁", "", "", null);
    res.render('arbitration.html', result);
}
exports.arbitration = arbitration;
function arbitrationDetail(req, res) {
    var result = new commonResult_1.commonResult("仲裁详情", "", "", null);
    res.render('arbitration_detail.html', result);
}
exports.arbitrationDetail = arbitrationDetail;
function fundDetail(req, res) {
    var result = new commonResult_1.commonResult("资金明细", "", "", null);
    res.render('fund_detail.html', result);
}
exports.fundDetail = fundDetail;
function inTransitFunds(req, res) {
    var result = new commonResult_1.commonResult("订单在途资金", "", "", null);
    res.render('in_transit_funds.html', result);
}
exports.inTransitFunds = inTransitFunds;
function feedback(req, res) {
    var result = new commonResult_1.commonResult("意见反馈", "", "", null);
    res.render('feedback.html', result);
}
exports.feedback = feedback;
function feedback_index(req, res) {
    var result = new commonResult_1.commonResult("意见反馈", "", "", null);
    res.render('feedback_index.html', result);
}
exports.feedback_index = feedback_index;
function feedback_list(req, res) {
    var result = new commonResult_1.commonResult("我的反馈", "", "", null);
    res.render('feedback_list.html', result);
}
exports.feedback_list = feedback_list;
function feedback_detail(req, res) {
    var result = new commonResult_1.commonResult("反馈详情", "", "", null);
    res.render('feedback_detail.html', result);
}
exports.feedback_detail = feedback_detail;
function withdraw(req, res) {
    var result = new commonResult_1.commonResult("提现中", "", "", null);
    res.render('withdraw.html', result);
}
exports.withdraw = withdraw;
function about(req, res) {
    var result = new commonResult_1.commonResult("关于我们", "", "", null);
    res.render('about.html', result);
}
exports.about = about;
function goback(req, res) {
    var result = new commonResult_1.commonResult("绑定完成", "", "", null);
    res.render('goback.html', result);
}
exports.goback = goback;
function details(req, res) {
    var result = new commonResult_1.commonResult("详情", "", "", null);
    res.render('details.html', result);
}
exports.details = details;
function help(req, res) {
    var result = new commonResult_1.commonResult("帮助中心", "", "", null);
    res.render('help.html', result);
}
exports.help = help;
function goods_detail(req, res) {
    var result = new commonResult_1.commonResult("商品详情", "", "", null);
    res.render('goods_detail.html', result);
}
exports.goods_detail = goods_detail;
function register(req, res) {
    var result = new commonResult_1.commonResult("下单注册", "", "", null);
    res.render('register.html', result);
}
exports.register = register;
function register_success(req, res) {
    var result = new commonResult_1.commonResult("注册成功", "", "", null);
    res.render('register_success.html', result);
}
exports.register_success = register_success;
function error(req, res) {
    var result = new commonResult_1.commonResult("Error", "", "", null);
    res.status(404);
    res.render('error', result);
}
exports.error = error;
