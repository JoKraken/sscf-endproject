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

app.get('/user', (req, res) => {
    userCon.getUser().then((result) => {
        res.send(JSON.stringify(result));
    });
});

app.delete('/user/:uid', (req, res) => {
    userCon.deleteUser(req.params.uid).then((result) => {
        res.send(JSON.stringify(result));
    });
});

app.get('/isAdmin/:uid', (req, res) => {
    let id = req.params.uid;
    userCon.isAdmin(id).then((result) => {
        res.sendStatus(result);
    });
});

app.get('/category', (req, res) => {
    cateCon.getCategory().then((result) => {
        res.send(JSON.stringify(result));
    });
});

app.delete('/category/:catoID', (req, res) => {
    cateCon.deleteCategory(req.params.catoID).then((result) => {
        res.send(result);
    });
});

app.get('/items/:catoid', (req, res) => {
    itemCon.getItems(req.params.catoid).then((result) => {
        res.send(JSON.stringify(result));
    });
});

app.get('/items/:catoid/:uid', (req, res) => {
    itemCon.getItemsFromUser(req.params.catoid, req.params.uid).then((result) => {
        res.send(JSON.stringify(result));
    });
});


app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.post('/login', (req, res) => {
    console.log(req.body);
    userCon.checkUser(req.body).then((result) => {
        console.log(result);
        if(result == 404 || result == 401){
            res.send(result);
        }else res.send(result);
    });
});

app.post('/createUser', (req, res) => {
    userCon.createUser(req.body).then((result) => {
        res.send(result);
    });
});

app.patch('/changeAdminStatus', (req, res) => {
    userCon.changeAdminStatus(req.body.id, req.body.status).then((result) => {
        res.sendStatus(result);
    });
});

app.post('/createCategory', (req, res) => {
    cateCon.createCategory(req.body).then((result) => {
        res.sendStatus(result);
    });
});