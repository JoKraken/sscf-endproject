'use strict';
require('dotenv').config();
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer({dest: '././front/uploads/'});
const itemCon = require('../controllers/itemController');


router.use(express.static('front'));
router.use(bodyParser.json());       // to support JSON-encoded bodies
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));


/**
 * @api {get} /item/:catoid get items searched by category id
 * @apiName getItems
 * @apiGroup Item
 *
 * @apiParam {Number} id Categories unique ID.
 *
 * @apiSuccess {json} array of the items
 */
router.get('/:catoid', (req, res) => {
    itemCon.getItems(req.params.catoid).then((result) => {
        res.send(JSON.stringify(result));
    });
});

/**
 * @api {get} /item/:catoid/:uid get items searched by category id and user id
 * @apiName getItemsFromUser
 * @apiGroup Item
 *
 * @apiParam {Number} id Categories unique ID.
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {json} array of the items
 */
router.get('/:catoid/:uid', (req, res) => {
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
router.delete('/:itemID', (req, res) => {
    itemCon.deleteItem(req.params.itemID).then((result) => {
        res.send(result);
    });
});


/**
 * @api {post} /item/create create item
 * @apiName createItem
 * @apiGroup Item
 *
 * @apiParam (Request body) {FormData} item object
 *
 * @apiSuccess {String} url
 */
router.post('/create', upload.single('image'), (req, res) => {
    itemCon.createItem(req).then((result) => {
        res.sendFile(process.env.DIRNAME + result);
    });
});

/**
 * @api {post} /item/edit edit item
 * @apiName editItem
 * @apiGroup Item
 *
 * @apiParam (Request body) {FormData} item object
 *
 * @apiSuccess {String} url
 */
router.post('/edit', upload.single('image'), (req, res) => {
    itemCon.editItem(req).then((result) => {
        res.sendFile(process.env.DIRNAME + result);
    });
});

module.exports = router;