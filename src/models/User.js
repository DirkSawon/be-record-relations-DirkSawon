import addressModel from './Address.js';

const { Schema, model } = require('mongoose');

const schema = new Schema({
    id: Number,
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    address: {
        type: Mongoose.Schema.Types.ObjecId,
        ref: "Address"
    }
}, { timestamps: true});

const userModel = new model('User', schema, 'users');

module.exports = userModel;
