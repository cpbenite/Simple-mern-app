const express = require('express')
const mongoose = require('mongoose')
const UserModel = require('./models/Users')
const dotenv = require('dotenv').config()

const cors = require('cors')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch(error) {
        console.log(error)
        process.exit(1)
    }
}

connectDB()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.get('/users', async (req, res) => {
    const users = await UserModel.find({})
    res.json(users)
})

app.post('/users', async (req, res) => {
    const user = req.body
    const newUser = new UserModel(user)
    await newUser.save()
    res.json(user)
})


app.listen(process.env.PORT || 3001, () => {
    console.log(`Running on port: ${process.env.PORT || 3001}`)
})
