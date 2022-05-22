const mongoose =require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    }
})

// const {name of model} = mongoose.model({name of database collection}, {name of schema})
const UserModel = mongoose.model('users', userSchema)


// Export user model
module.exports = UserModel