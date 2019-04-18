const schema = require('../models/category');

exports.getCategory = () => {
    return schema.Category.find({delete: false}).then(data => {
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

exports.deleteCategory = (id) => {
    return schema.Category.update({_id: id},{delete: true}).then(data => {
        return 200;
    });
};
