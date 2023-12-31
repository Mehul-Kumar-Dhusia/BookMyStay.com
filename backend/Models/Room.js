const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    HotelId : {
        type : String
    },
    name : {
        type : String
    },
    Desc : {
        type : String
    },
    Price : {
        type : Number
    },
    Images : {
        type : [String]
    },
    bookedDate : {
        type : [{
            startDate : Number,
            endDate : Number
        }]
    }
});

module.exports = mongoose.model("Room", RoomSchema);
