const mongoose = require('mongoose');

const petNameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true
    },
    owner: {
        type: String,
        required: true,
        trim: true
    }
});

const PetName = mongoose.model('PetName', petNameSchema);

module.exports = PetName;