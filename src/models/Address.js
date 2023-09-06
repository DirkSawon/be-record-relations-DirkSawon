const { Schema, model } = require('mongoose');

const schema = new Schema({
    street: String,
    city: string
}, { timestamps: true});

const addressModel = new model('Address', schema, 'addresses');

module.exports = addressModel;