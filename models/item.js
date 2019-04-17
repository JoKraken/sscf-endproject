const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    time: { type: Date, default: Date.now },
    category_id: { type: Schema.Types.ObjectId, ref: 'Category'},
    title: { type: String, default: '' },
    details: { type: String, default: '' },
    image: { type: String, default: '' },
    delete: { type: Boolean, default: false },
    user_id: { type: Schema.Types.ObjectId, ref: 'User'}
});

const Model = mongoose.model('Test', dataSchema);
exports.Data = Model;
