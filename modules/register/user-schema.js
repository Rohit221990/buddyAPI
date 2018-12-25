var mongoose = require('mongoose');

Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    username: {
        type: String,
        required: 'Enter a username'            
    },
    phone: {
        type: Number
    },
    password: {
        type: String,
        required: 'Enter a password'            
    },
    confirmPassword: {
        type: String,
        required: 'Enter a confirm password'            
    },
    created_date: {
        type: Date,
        default: Date.now
    }
}); 

var userSchema = mongoose.model("User", userSchema)

module.exports = userSchema;