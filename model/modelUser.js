const mongoose = require('mongoose')

const { Schema } = mongoose

const userSchema = new Schema({ //Number = int
    name: String, 
    email: String,
    password: String,
})

const user = mongoose.model('ERO-user', userSchema)
exports.user = user