const mongoose = require('mongoose');
const User = mongoose.Schema;

const userSchema = new User({
    username: { type: String, required: true },
    password: { type: String, required: true }
});

const Model = mongoose.model('User', userSchema);
exports.User = Model;