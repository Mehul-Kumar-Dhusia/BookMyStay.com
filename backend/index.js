const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
const authRoute = require('./Routes/auth')
const hotelRoute = require('./Routes/hotel')
const roomRoute = require('./Routes/room')
const userRoute = require('./Routes/user')

const app = express()

app.use('/api/auth' , authRoute)
app.use('/api/hotels' , hotelRoute)
app.use('/api/rooms' , roomRoute)
app.use('/api/users' , userRoute)

mongoose.connect(process.env.MONGO)
.then(() => {
    app.listen(process.env.PORT , () => {
        console.log("Server is running at port : 3000 and database is connected");
    })
})
.catch(err => {console.log(err);})