const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    companyId: {
        type: String,
        required: [true, 'Please add a Company ID'],
        unique: true,
        trim: true
    },
    articleIds: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Article',
        default: []
    }
}, { timestamps: true });

module.exports = mongoose.model('Company', companySchema);
