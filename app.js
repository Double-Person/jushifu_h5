"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var http = require("http");
var path = require("path");
var ejs = require("ejs");
var routeConfig = require("./routes/routeConfig");
var cluster = require("cluster");
var cookie = require("cookie-parser");
var app = express();
process.on('uncaughtException', function (err) {
    //打印出错误
    console.log(err);
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', ejs.__express);
app.set('view engine', 'html');
app.use(cookie());
routeConfig.setRoute(app);
var numCPUs = require('os').cpus().length;
if (cluster.isMaster && false) {
    require('os').cpus().forEach(function () {
        cluster.fork();
    });
    cluster.on('exit', function (worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died');
    });
    cluster.on('listening', function (worker, address) {
        console.log("A worker with #" + worker.id + " is now connected to " + address.address + ":" + address.port);
    });
}
else {
    http.createServer(app).listen(app.get('port'), function () {
        console.log('Express server listening on port ' + app.get('port'));
    });
}
module.exports = app;
