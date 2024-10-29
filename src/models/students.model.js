const { Schema, model } = require('mongoose');

const studentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    }

}, { timestamps: true });

const Student = model('Student', studentSchema);

module.exports = Student