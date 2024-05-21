const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a Title'],
        trim: true
    },
    url: {
        type: String,
        required: [true, 'Please add url']
    },
    author: {
        type: String,
        required: [true, 'Please add an Author']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

module.exports = mongoose.model('Article', articleSchema);
