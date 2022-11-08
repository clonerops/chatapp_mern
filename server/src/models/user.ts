import { Schema, model } from 'mongoose'
const timestamp = require('mongoose-timestamp');

const userSchema = new Schema({
    firstName: {
        type: String,
        require: true
    },

    lastName: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true,
        unique: true
    },

    password: {
        type: String,
        require: true,
    },
    avatar: {
        type: String,
    },

})

userSchema.plugin(timestamp);

export default model('User', userSchema)