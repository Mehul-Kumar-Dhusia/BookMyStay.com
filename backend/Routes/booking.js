const express = require("express");
const Booking = require("../Models/Booking");
const router = express.Router();

router.post("/", async (req, res) => {
  const newBooking = new Booking(req.body);
  try {
    const savedNewBooking = await newBooking.save();
    res.status(200).json(savedNewBooking);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/' , async (req , res) => {
  try{
    const allBookedRoom = await Booking.find({}) ;
    res.status(200).json(allBookedRoom) ;
  }catch(err){
    res.status(500).json(err)
  }
})

router.delete('/:id' , async (req , res) => {
  try{
    await Booking.findByIdAndDelete(req.params.id) ;
    res.status(200).json("Booking deleted Successfully")
  }catch(err){
    res.status(500).json(err)
  }
})

router.get('/:userId' , async (req , res) => {
    try{
        const BookingDetails = await Booking.find({userId : req.params.userId}) ;
        res.status(200).json(BookingDetails)
    }catch(err){
        res.status(200).json(err)
    }
})



module.exports = router;
