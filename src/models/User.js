const { Schema, model, mongoose } = require('mongoose');
//import mongoose from 'mongoose';

const schema = new Schema({
    id: Number,
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address"
    }
}, { timestamps: true});

const userModel = new model('User', schema, 'users');

module.exports = userModel;
