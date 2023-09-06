const { Schema, model } = require('mongoose');

const schema = new Schema({
    id: Number,
    qty: Number,
    records: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Record"
    }]
}, { timestamps: true});

const orderModel = new model('Order', schema, 'orders');

module.exports = orderModel;
