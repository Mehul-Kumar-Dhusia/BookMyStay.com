const express = require("express");
const Hotel = require("../Models/Hotel");
const router = express.Router();

router.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedHotel = Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id" , async (req,res) => {
    try{
        await Hotel.findByIdAndDelete(req.params.id) ;
        res.status(200).json("Hotel has deleted")
    }catch(err){
        res.status(500).json(err) ;
    }
})

router.get("/find/:id", async (req, res) => {
    try {
      const getHotel = await Hotel.findById(req.params.id);
      res.status(200).json(getHotel);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get("/", async (req, res) => {
    try {
      const allHotel = await Hotel.find() ;
      res.status(200).json(allHotel);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get("/city", async (req, res) => {
  try {
    const hotelList = await Hotel.find({city : req.query.city}) ;
    res.status(200).json(hotelList) ;
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
