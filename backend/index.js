const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
const authRoute = require('./Routes/auth')
const hotelRoute = require('./Routes/hotel')
const roomRoute = require('./Routes/room')
const userRoute = require('./Routes/user')
const bookingRoute = require('./Routes/booking')
const cookieParser = require('cookie-parser')

const app = express()

app.use(express.json())

app.use(cookieParser())

app.use('/api/auth' , authRoute)
app.use('/api/hotels' , hotelRoute)
app.use('/api/rooms' , roomRoute)
app.use('/api/users' , userRoute)
app.use('/api/booking' , bookingRoute)


const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO) ;
        console.log("Database is connected")
    }catch(err){
        throw(err)
    }
}

app.listen(process.env.PORT , () => {
    connect() ;
    console.log("Server is running at port 8000") ;
})