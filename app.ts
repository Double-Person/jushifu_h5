import express = require('express');
import http = require('http');
import path = require("path")
import ejs = require('ejs');
import routeConfig = require("./routes/routeConfig");
import cluster = require("cluster");
import cookie = require("cookie-parser");

let app = express();

process.on('uncaughtException', (err) => {
    //打印出错误
    console.log(err);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html',ejs.__express);
app.set('view engine', 'html');
app.use(cookie());

routeConfig.setRoute(app);
let numCPUs = require('os').cpus().length;
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
} else {
    http.createServer(app).listen(app.get('port'), function () {
        console.log('Express server listening on port ' + app.get('port'));
    });
}

module.exports = app;