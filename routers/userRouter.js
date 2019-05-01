'use strict';
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const userCon = require('../controllers/userController');

router.use(bodyParser.json());
router.use(express.static('front'));

/**
 * @api {get} /user/all get all User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiSuccess {json} array of all users
 */
router.get('/all', (req, res) => {
    userCon.getUser().then((result) => {
        console.log(result);
        res.send(JSON.stringify(result));
    });
});

/**
 * @api {get} /user/all/:id get User information
 * @apiName GetUserById
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {json} one user
 */
router.get('/all/:uid', (req, res) => {
    userCon.getUserById(req.params.uid).then((result) => {
        res.send(JSON.stringify(result));
    });
});


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
router.post('/login', (req, res) => {
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
router.post('/create', (req, res) => {
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
router.patch('/changeAdminStatus', (req, res) => {
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
router.patch('/changeUserSettings', (req, res) => {
    userCon.changeUserSettings(req.body._id, req.body).then((result) => {
        res.sendStatus(result);
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
router.delete('/:uid', (req, res) => {
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
router.get('/isAdmin/:uid', (req, res) => {
    let id = req.params.uid;
    userCon.isAdmin(id).then((result) => {
        res.sendStatus(result);
    });
});

module.exports = router;