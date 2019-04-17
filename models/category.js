const mongoose = require('mongoose');
const Category = mongoose.Schema;

const cateSchema = new Category({
    time: { type: Date, default: Date.now },
    name: { type: String, required: true }
});

const Model = mongoose.model('Category', cateSchema);
exports.Category = Model;