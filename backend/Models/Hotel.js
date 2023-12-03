const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
    name : {
        type : String ,
        required : true
    },
    type : {
        type : String ,
        required : true 
    },
    city : {
        type : String,
        required : true
    }
    // address : {
    //     type : String ,
    //     required : true 
    // },
    // desc : {
    //     type : String,
    //     required : true
    // },
    // images : {
    //     type : [String] ,
    // },
    // rooms : {
    //     type : [String]
    // },
    // rating : {
    //     type : Number,
    //     min : 0,
    //     max : 5
    // },
    // distance : {
    //     type : Number,
    //     required : true 
    // },
    // cheapestPrice : {
    //     type : Number
    // },
    // featured : {
    //     type : Boolean,
    //     default : false
    // }
});

module.exports = mongoose.model("Hotel", HotelSchema);
