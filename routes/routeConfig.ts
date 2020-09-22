import express = require("express");
import routes = require("./index");

import {commonResult} from "../Scripts/models/commonResult";

/**设置路由*/
export function setRoute(app: express.Express) {
    app.get('', routes.index);
    app.get('/invite.html', routes.invite);
    app.get('/reviews.html', routes.reviews);
    app.get('/checkin.html', routes.checkin);
    app.get('/arbitration.html', routes.arbitration);
    app.get("/arbitration_detail.html",routes.arbitrationDetail);
    app.get("/fund_detail.html",routes.fundDetail);
    app.get("/in_transit_funds.html",routes.inTransitFunds);
    app.get("/withdraw.html",routes.withdraw);
    app.get("/feedback.html",routes.feedback);
    app.get("/feedback_index.html",routes.feedback_index);
    app.get("/feedback_list.html",routes.feedback_list);
    app.get("/feedback_detail.html",routes.feedback_detail);
    app.get("/about.html",routes.about);
    app.get("/goback.html",routes.goback);
    app.get("/details.html",routes.details);
    app.get("/help.html",routes.help);
    app.get("/goods_detail.html",routes.goods_detail);
    app.get("/register.html",routes.register);
    app.get("/register_success.html",routes.register_success);
    app.get('*', routes.error);

    app.use(function (err, req, res, next) {
        console.log(err);
        let result = new commonResult(req,"Error", 5, "", "","");
        res.status(500);
        res.render('error', result);
        next();
    })
}


