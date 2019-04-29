'use strict';

require('dotenv').config();

//Controllers
const userCon = require('./controllers/userController');
const cateCon = require('./controllers/categoryController');
const itemCon = require('./controllers/itemController');

const https = require('https');
var multer = require('multer');
var upload = multer({dest: 'front/uploads/'});
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
 * @api {get} /user get all User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiSuccess {json} array of all users
 */
app.get('/user', (req, res) => {
    userCon.getUser().then((result) => {
        res.send(JSON.stringify(result));
    });
});

/**
 * @api {get} /user/:id get User information
 * @apiName GetUserById
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {json} one user
 */
app.get('/user/:uid', (req, res) => {
    userCon.getUserById(req.params.uid).then((result) => {
        res.send(JSON.stringify(result));
    });
});

/**
 * @api {delete} /user/:id delete user
 * @apiName DeleteUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {number} 200
 */
app.delete('/user/:uid', (req, res) => {
    userCon.deleteUser(req.params.uid).then((result) => {
        res.send(JSON.stringify(result));
    });
});

/**
 * @api {get} /isAdmin/:uid get the check if user is admin
 * @apiName IsAdmin
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {Number} 200
 * @apiError 404 user is not admin
 * @apiError 401 user not found
 */
app.get('/isAdmin/:uid', (req, res) => {
    let id = req.params.uid;
    userCon.isAdmin(id).then((result) => {
        res.sendStatus(result);
    });
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

/**
 * @api {get} /items/:catoid get items searched by category id
 * @apiName getItems
 * @apiGroup Item
 *
 * @apiParam {Number} id Categories unique ID.
 *
 * @apiSuccess {json} array of the items
 */
app.get('/items/:catoid', (req, res) => {
    itemCon.getItems(req.params.catoid).then((result) => {
        res.send(JSON.stringify(result));
    });
});

/**
 * @api {get} /items/:catoid/:uid get items searched by category id and user id
 * @apiName getItemsFromUser
 * @apiGroup Item
 *
 * @apiParam {Number} id Categories unique ID.
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {json} array of the items
 */
app.get('/items/:catoid/:uid', (req, res) => {
    itemCon.getItemsFromUser(req.params.catoid, req.params.uid).then((result) => {
        res.send(JSON.stringify(result));
    });
});

/**
 * @api {delete} /item/:itemID delete item
 * @apiName deleteItem
 * @apiGroup Item
 *
 * @apiParam {Number} id Items unique ID.
 *
 * @apiSuccess {Number} 200
 */
app.delete('/item/:itemID', (req, res) => {
    itemCon.deleteItem(req.params.itemID).then((result) => {
        res.send(result);
    });
});


app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

/**
 * @api {post} /login check user
 * @apiName login
 * @apiGroup User
 *
 * @apiParam (Request body) {FormData} user object
 *
 * @apiSuccess {Number} status 200
 * @apiError 404 wrong password
 * @apiError 401 user not found
 */
app.post('/login', (req, res) => {
    userCon.checkUser(req.body).then((result) => {
        res.send(result);
    });
});

/**
 * @api {post} /createUser create user
 * @apiName createUser
 * @apiGroup User
 *
 * @apiParam (Request body) {FormData} user object
 *
 * @apiSuccess {Number} user id
 */
app.post('/createUser', (req, res) => {
    userCon.createUser(req.body).then((result) => {
        res.send(result);
    });
});

/**
 * @api {post} /changeAdminStatus change admin status
 * @apiName changeAdminStatus
 * @apiGroup User
 *
 * @apiParam (Request body) {FormData} admin status (boolean)
 *
 * @apiSuccess {Number} status 200
 */
app.patch('/changeAdminStatus', (req, res) => {
    userCon.changeAdminStatus(req.body.id, req.body.status).then((result) => {
        res.sendStatus(result);
    });
});

/**
 * @api {post} /changeUserSettings change user settings
 * @apiName changeUserSettings
 * @apiGroup User
 *
 * @apiParam (Request body) {FormData} user object (username, password)
 *
 * @apiSuccess {Number} status 200
 */
app.patch('/changeUserSettings', (req, res) => {
    userCon.changeUserSettings(req.body._id, req.body).then((result) => {
        res.sendStatus(result);
    });
});

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

/**
 * @api {post} /item create item
 * @apiName createItem
 * @apiGroup Item
 *
 * @apiParam (Request body) {FormData} item object
 *
 * @apiSuccess {String} url
 */
app.post('/item', upload.single('image'), (req, res) => {
    itemCon.createItem(req).then((result) => {
        res.sendFile(__dirname + result);
    });
});

/**
 * @api {post} /editItem edit item
 * @apiName editItem
 * @apiGroup Item
 *
 * @apiParam (Request body) {FormData} item object
 *
 * @apiSuccess {String} url
 */
app.post('/editItem', upload.single('image'), (req, res) => {
    itemCon.editItem(req).then((result) => {
        res.sendFile(__dirname + result);
    });
});