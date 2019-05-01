'use strict';
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const cateCon = require('../controllers/categoryController');


router.use(bodyParser.json());       // to support JSON-encoded bodies
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
router.use(express.static('front'));


/**
 * @api {get} /category/all get all category information
 * @apiName getCategory
 * @apiGroup Category
 *
 * @apiContentType application/json
 *
 * @apiSuccess {json} array of all category
 */
router.get('/all', (req, res) => {
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
router.delete('/:catoID', (req, res) => {
    cateCon.deleteCategory(req.params.catoID).then((result) => {
        res.send(result);
    });
});

/**
 * @api {post} /category/create create category
 * @apiName createCategory
 * @apiGroup Category
 *
 * @apiParam (Request body) {FormData} category object
 *
 * @apiSuccess {Number} status
 */
router.post('/create', (req, res) => {
    cateCon.createCategory(req.body).then((result) => {
        res.sendStatus(result);
    });
});

module.exports = router;