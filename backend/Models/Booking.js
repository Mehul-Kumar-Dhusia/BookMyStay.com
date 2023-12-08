const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    userId : {
        type : String
    },
    HotelName : {
        type : String
    },
    RoomType : {
        type : String
    },
    CheckInDate : {
        type : String
    },
    CheckOutDate : {
        type : String
    },
    Amount : {
        type : Number
    },
    Status : {
        type : String
    }
} , {timestamps : true});

module.exports = mongoose.model("Booking", BookingSchema);
