﻿import express from "express";
import chipsConfig = require("../../config/config");
import mysql = require("mysql");

var pool = mysql.createPool({
    host: "",
    user: "",
    password: "",
    database: "",
    charset: 'utf8_general_ci'
});

// 'mysql://user:pass@host/db?debug=true&charset=BIG5_CHINESE_CI&timezone=-0700'

export function query(query, params, successCallback, errorCallback) {
    pool.query(query, function (error, result, fields) {
        if (error) {
            console.log(error);
            errorCallback(error);
        }
        // test
        successCallback(result);
    });
}