const schema = require('../models/category');

exports.getCategory = () => {
    return schema.Category.find().then(data => {
        return data;
    });
};

exports.createCategory = (body) => {
    return schema.Category.create({
        name: body.name
    }).then(post => {
        return 200;
    })
};
