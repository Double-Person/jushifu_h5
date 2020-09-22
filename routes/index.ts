import express from "express";
import qs = require("querystring");

import {commonResult} from "../Scripts/models/commonResult";


/* GET home page. */
export function index(req: express.Request, res: express.Response) {
    let result = new commonResult("index", "", "", null);
    res.render('index.html', result);
}

export function invite(req: express.Request, res: express.Response) {
    let result = new commonResult("邀请返利", "", "", null);
    res.render('invite.html', result);
}

export function reviews(req: express.Request, res: express.Response) {
    let result = new commonResult("客户评价", "", "", null);
    res.render('reviews.html', result);
}

export function checkin(req: express.Request, res: express.Response) {
    let result = new commonResult("我的签到", "", "", null);
    res.render('checkin.html', result);
}

export function arbitration(req: express.Request, res: express.Response) {
    let result = new commonResult("退款仲裁", "", "", null);
    res.render('arbitration.html', result);
}

export function arbitrationDetail(req: express.Request, res: express.Response) {
    let result = new commonResult("仲裁详情", "", "", null);
    res.render('arbitration_detail.html', result);
}

export function fundDetail(req: express.Request, res: express.Response) {
    let result = new commonResult("资金明细", "", "", null);
    res.render('fund_detail.html', result);
}

export function inTransitFunds(req: express.Request, res: express.Response) {
    let result = new commonResult("订单在途资金", "", "", null);
    res.render('in_transit_funds.html', result);
}

export function feedback(req: express.Request, res: express.Response) {
    let result = new commonResult("意见反馈", "", "", null);
    res.render('feedback.html', result);
}
export function feedback_index(req: express.Request, res: express.Response) {
    let result = new commonResult("意见反馈", "", "", null);
    res.render('feedback_index.html', result);
}
export function feedback_list(req: express.Request, res: express.Response) {
    let result = new commonResult("我的反馈", "", "", null);
    res.render('feedback_list.html', result);
}
export function feedback_detail(req: express.Request, res: express.Response) {
    let result = new commonResult("反馈详情", "", "", null);
    res.render('feedback_detail.html', result);
}

export function withdraw(req: express.Request, res: express.Response) {
    let result = new commonResult("提现中", "", "", null);
    res.render('withdraw.html', result);
}

export function about(req: express.Request, res: express.Response) {
    let result = new commonResult("关于我们", "", "", null);
    res.render('about.html', result);
}

export function goback(req: express.Request, res: express.Response) {
    let result = new commonResult("绑定完成", "", "", null);
    res.render('goback.html', result);
}

export function details(req: express.Request, res: express.Response) {
    let result = new commonResult("详情", "", "", null);
    res.render('details.html', result);
}
export function help(req: express.Request, res: express.Response) {
    let result = new commonResult("帮助中心", "", "", null);
    res.render('help.html', result);
}

export function goods_detail(req: express.Request, res: express.Response) {
    let result = new commonResult("商品详情", "", "", null);
    res.render('goods_detail.html', result);
}


export function register(req: express.Request, res: express.Response) {
    let result = new commonResult("下单注册", "", "", null);
    res.render('register.html', result);
}

export function register_success(req: express.Request, res: express.Response) {
    let result = new commonResult("注册成功", "", "", null);
    res.render('register_success.html', result);
}


export function error(req: express.Request, res: express.Response) {
    let result = new commonResult("Error", "", "", null);
    res.status(404);
    res.render('error', result);
}
