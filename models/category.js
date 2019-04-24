const mongoose = require('mongoose');
const Category = mongoose.Schema;

const cateSchema = new Category({
    time: { type: Date, default: Date.now },
    name: { type: String, required: true },
    delete: { type: Boolean, default: false },
    count: { type: Number, default: 0 }
});

const Model = mongoose.model('Category', cateSchema);
exports.Category = Model;