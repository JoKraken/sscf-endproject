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