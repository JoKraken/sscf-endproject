const schema = require('../models/category');

exports.getCategory = () => {
    return schema.Category.find().then(data => {
        return data;
    });
};
