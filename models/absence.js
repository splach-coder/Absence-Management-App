const mongoose = require('mongoose');

const absenceSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    hours: {
        type: Number,
        required: true
    },
    motif: {
        type: String,
        required: true
    }
});

const Absence = mongoose.model('Absence', absenceSchema);

module.exports = Absence;