const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: [true, 'Please add a Username'],
        unique: true,
        maxlength: 32
    },
    uid: {
        type: String,
        required: [true, 'Please add a UID'],
        unique: true
    },
    name: {
        type: String,
        trim: true,
        required: [true, 'Please add a Name'],
        maxlength: 32
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'Please add an E-mail'],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid E-mail'
        ]
    },
    password: {
        type: String,
        trim: true,
        required: [true, 'Please add a Password'],
        minlength: [6, 'Password must have at least six(6) characters'],
        match: [
            /^(?=.*\d)(?=.*[@#\-_$%^&+=§!\?])(?=.*[a-z])(?=.*[A-Z])[0-9A-Za-z@#\-_$%^&+=§!\?]+$/,
            'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and a special character'
        ]
    },
    fname: {
        type: String,
        trim: true,
        required: [true, 'Please add a First Name'],
        maxlength: 32
    },
    lname: {
        type: String,
        trim: true,
        required: [true, 'Please add a Last Name'],
        maxlength: 32
    },
    phone: {
        type: String,
        trim: true,
        required: [true, 'Please add a Phone Number'],
        match: [
            /^\+?[1-9]\d{1,14}$/,
            'Please add a valid Phone Number'
        ]
    },
    followCompanyIds: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Company',
        default: []
    },
    
    Created_on: { type: Date, default: Date.now() },
   
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);


 