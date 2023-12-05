const express = require('express')
const Room = require('../Models/Room')
const router = express.Router()

// Create Room
router.post('/' , async (req, res) => {
    const newRoom = new Room(req.body)
    try{
        const savedRoom = await newRoom.save()
        res.status(200).json(savedRoom)
    }catch(err){
        res.status(500).json(err)
    }
})

// Delete Room
router.delete('/:id' , async (req,res) => {
    try{
        await Room.findByIdAndDelete(req.params.id)
        res.status(200).json("Room Deleted Successfully")
    }catch(err){
        res.status(500).json(err)
    }
})

// Get all Room
router.get('/' , async (req , res) => {
    try{
        const roomData = await Room.find() ;
        res.status(200).json(roomData)
    }catch(err){
        res.status(500).json(err)
    }
})

// Get All Room Data For the particualar Hotel
router.get("/:hotelId" , async (req,res) => {
    try{
        const roomsData = await Room.find({HotelId : req.params.hotelId})
        res.status(200).json(roomsData)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router