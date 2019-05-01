'use strict';

require('dotenv').config();

//Controllers
const userCon = require('./controllers/userController');
const cateCon = require('./controllers/categoryController');
const itemCon = require('./controllers/itemController');

//Routers
const userRouter = require('./routers/userRouter');
const itemRouter = require('./routers/itemRouter');

const https = require('https');
var multer = require('multer');
const sharp = require('sharp');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const http = express();

//for apidoc
app.use('/apidoc', express.static('./apidoc'));


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
/*app.use ((req, res, next) => {
    if (req.secure) {
        // request was via https, so do no special handling
        next();
    } else {
        // request was via http, so redirect to https
        res.redirect('https://' + req.headers.host + req.url);
    }
});*/

mongoose.connect('mongodb://'+ process.env.DB_USER +':'+ process.env.DB_PWD + '@'+ process.env.DB_HOST + ':' + process.env.DB_PORT + '/sssf-endproject', { useNewUrlParser: true }).then(() => {
    console.log('Connected successfully.');

    app.listen(process.env.APP_PORT);

}, err => {
    console.log('Connection to db failed: ' + err);
});

/**
 * @api {get} /category get all category information
 * @apiName getCategory
 * @apiGroup Category
 *
 * @apiContentType application/json
 *
 * @apiSuccess {json} array of all category
 */
app.get('/category', (req, res) => {
    cateCon.getCategory().then((result) => {
        res.send(JSON.stringify(result));
    });
});

/**
 * @api {delete} /category/:catoID delete category
 * @apiName deleteCategory
 * @apiGroup Category
 *
 * @apiParam {Number} id Categories unique ID.
 *
 * @apiSuccess {Number} 200
 */
app.delete('/category/:catoID', (req, res) => {
    cateCon.deleteCategory(req.params.catoID).then((result) => {
        res.send(result);
    });
});

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

/**
 * @api {post} /createCategory create category
 * @apiName createCategory
 * @apiGroup Category
 *
 * @apiParam (Request body) {FormData} category object
 *
 * @apiSuccess {Number} status
 */
app.post('/createCategory', (req, res) => {
    cateCon.createCategory(req.body).then((result) => {
        res.sendStatus(result);
    });
});

app.use('/user', userRouter);
app.use('/item', itemRouter);