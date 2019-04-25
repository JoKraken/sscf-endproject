const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    time: { type: Date, default: Date.now },
    category: { type: Schema.Types.ObjectId , ref: 'Category', required: true},
    title: { type: String, default: '' , required: true},
    details: { type: String, default: '' },
    image: { type: String, default: '' },
    delete: { type: Boolean, default: false },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true},
    gps: {
        lat: { type: String, default: '' },
        long: { type: String, default: '' }
    }
});

const Model = mongoose.model('Item', dataSchema);
exports.Item = Model;