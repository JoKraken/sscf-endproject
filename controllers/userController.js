const schema = require('../models/user');

exports.getUser = () => {
    return schema.User.find({}, {password: 0}).then(data => {
        return data;
    });
};
exports.getUserById = (uid) => {
    return schema.User.find({_id: uid}).then(data => {
        return data;
    });
};

exports.checkUser = (body) => {
    return schema.User.find({username: body.name}).then(data => {
        if (data.length == 1) {
            if (data[0].password == body.pwd) {
                return {id: data[0]._id, name: data[0].username};
            } else return "404";
        } else {
            return "401";
        }
    });
};

exports.createUser = (body) => {
    return schema.User.find({username: body.name}).then(data => {
        if(data.length == 0 && body.name.length <= 10){
            return schema.User.create({
                username: body.name,
                password: body.pwd
            }).then(post => {
                return post._id;
            });
        }else return "404";
    });
};

exports.isAdmin = (id) => {
    return schema.User.find({_id: id}).then(data => {
        if(data.length==1) {
            if(data[0].admin){
                return 200;
            }else return 404
        } else return 401;
    });
};

exports.changeAdminStatus = (id, status) => {
    return schema.User.update({_id: id},{admin: status}).then(data => {
        return 200;
    });
};

exports.changeUserSettings = (id, body) => {
    return schema.User.update({_id: id},{username: body.name, password: body.pwd}).then(data => {
        return 200;
    });
};

exports.deleteUser = (id) => {
    return schema.User.findByIdAndRemove(id, function (err) {
        return 200;
    });
};