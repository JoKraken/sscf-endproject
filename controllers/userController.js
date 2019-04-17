const schema = require('../models/user');

exports.getUser = () => {
    return schema.User.find().then(data => {
        return data;
    });
};

exports.checkUser = (body) => {
    return schema.User.find({username: body.name}).then(data => {
        if(data.length==1) {
            if(data[0].password == body.pwd){
                return data[0]._id;
            }else return 404
        } else return 401;
    });
};

exports.createUser = (body) => {
    return schema.User.create({
        username: body.name,
        password: body.pwd
    }).then(post => {
        return 200;
    })
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

exports.deleteUser = (id) => {
    return schema.User.findByIdAndRemove(id, function (err) {
        return 200;
    });
};