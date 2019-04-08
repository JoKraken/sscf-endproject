'use strict';

require('dotenv').config();
const https = require('https');
var multer = require('multer');
var upload = multer({dest: 'front/uploads/'});
const sharp = require('sharp');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const express = require('express');
const app = express();
const http = express();

//for security
const helmet = require('helmet');
app.use(helmet());

//jelastic
app.enable('trust proxy');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.static('front'));


//jelastic https redirect
app.use ((req, res, next) => {
    if (req.secure) {
        // request was via https, so do no special handling
        next();
    } else {
        // request was via http, so redirect to https
        res.redirect('https://' + req.headers.host + req.url);
    }
});

mongoose.connect('mongodb://'+ process.env.DB_USER +':'+ process.env.DB_PWD + '@'+ process.env.DB_HOST + ':' + process.env.DB_PORT + '/sssf-endproject').then(() => {
    console.log('Connected successfully.');

    app.listen(process.env.APP_PORT);

}, err => {
    console.log('Connection to db failed: ' + err);
});

app.get('/', (req, res) => {
    res.send("test");
});
