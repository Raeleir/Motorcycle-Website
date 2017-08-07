const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bikeSchema = new Schema({
    pic: {
        type: String,
        required: true
    },
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    msrp: {
        type: Number,
        required: true
    },
    cc: {
        type: Number,
        required: true
    },
    engine: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model(`bikes`, bikeSchema);