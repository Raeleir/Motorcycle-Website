const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bikeSchema = new Schema({
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
    }
})

module.exports = mongoose.model(`votes`, voteSchema);