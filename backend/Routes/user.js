const express = require("express");
const User = require("../models/User");
const router = express.Router();


router.put("/:id", async (req, res) => {
  try {
    const updatedUser = User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id" , async (req,res) => {
    try{
        await User.findByIdAndDelete(req.params.id) ;
        res.status(200).json("User has deleted")
    }catch(err){
        res.status(500).json(err) ;
    }
})

router.get("/:id", async (req, res) => {
    try {
      const getUser = await User.findById(req.params.id);
      res.status(200).json(getUser);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get("/", async (req, res) => {
    try {
      const allUser = await User.find() ;
      res.status(200).json(allUser);
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;
