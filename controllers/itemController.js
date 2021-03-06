const schema = require('../models/item');

exports.getItems = (catoid) => {
    if(catoid != "undefined"){
        return schema.Item.find({category: catoid}).populate('user').populate('category').then(data => {
            return getRidOfPassword(data);
        });
    }else{
        return schema.Item.find().populate('user').populate('category').then(data => {
            return getRidOfPassword(data);
        });
    }
};

exports.getItemsFromUser = (catoid, uid) => {
    if(catoid != "undefined"){
        return schema.Item.find({category: catoid, user: uid}).populate('user').populate('category').then(data => {
            return getRidOfPassword(data);
        });
    }else{
        return schema.Item.find({user: uid}).populate('user').populate('category').then(data => {
            return getRidOfPassword(data);
        });
    }
};

const getRidOfPassword = (data) => {
    data.forEach(function (item) {
        item.user.password = undefined;
        item.user.admin = undefined;
    });
    return data;
};

exports.createItem = (req) =>  {
    return schema.Item.create({
        category: req.body.catoSelect,
        title: req.body.title,
        details: req.body.des,
        image: (req.file == undefined) ? "" : req.file.filename,
        user: req.body.uid,
        gps: {lat: req.body.default_latitude, long: req.body.default_longitude}
    }).then(post => {
        return "/front/myReports.html";
    });
};

exports.editItem = (req) =>  {
    console.log(req.body);
    var temp = req.body;

    let data = {
        category: temp.catoSelect,
        title: temp.title,
        details: temp.des,
    };
    if(req.file != undefined) data.image= req.file.filename;

    return schema.Item.update({
            _id: req.query.id
        }, data
    ).then(post => {
        return "/front/myReports.html";
    });
};

exports.deleteItem = (id) => {
    return schema.Item.findByIdAndRemove(id, function (err) {
        return 200;
    });
};
