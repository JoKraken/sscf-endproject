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

function getRidOfPassword(data){
    data.forEach(function (item) {
        item.user.password = undefined;
        item.user.admin = undefined;
    });
    return data;
}

exports.createItem = (req) =>  {
    return schema.Item.create({
        category: req.body.catoSelect,
        title: req.body.title,
        details: req.body.des,
        image: (req.file == undefined) ? "" : req.file.filename,
        user: req.body.uid
    }).then(post => {
        return "/front/index.html";
    });
};

exports.deleteItem = (id) => {
    return schema.Item.findByIdAndRemove(id, function (err) {
        return 200;
    });
};
