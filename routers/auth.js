const express = require('express');

const router = express.Router();
const User = require("../models/User");
const Joi = require("@hapi/joi");


router.post("/register", (req, res) => {

    res.send(req.body.email);


});


module.exports = router;