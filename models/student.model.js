const mongoose = require('mongoose');


var studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: 'This field is required'
    },
    lastName: {
        type: String,
        required: 'This field is required'
    },
    email: {
        type: String,
    },
    age: {
        type: String
    },
    address: {
        type: String
    }

});

studentSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid Email');



mongoose.model('Student', studentSchema);