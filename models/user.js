const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    age: Number,
    job: String,
    date: {
        type: Date,
        default: Date.now,
    }
})

const Users = mongoose.model('Users', userSchema, 'Users');
module.exports = Users;