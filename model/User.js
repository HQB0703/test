const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    dayOfBirth: {
        type: Date,
        required: true
    },
});

let UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
