const express = require('express')
const router = express.Router()
router.get("/" , (req,res) => {
    res.send("Hello world something user page")
})
module.exports = router